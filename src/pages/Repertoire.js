import NavigationDashboard from '../components/NavigationDashboard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from '../images/user.jpg';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

function Repertoire() {

    const [theme, setTheme] = useState("light");
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    const [contacts, setContacts] = useState([]);
    const [SearchTerm, setSearchTerm] = useState("");
    const [SearchResults, setSearchResults] = useState([]);
    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        api.get('/Contact/AllWithCustomerName').then((response) => {
            setContacts(response.data);
            setSearchTerm(response.data[0].idcontact);
        });
    }, []);

    useEffect(() => {
        api.get('/Customer/All').then((response) => {
            setCustomers(response.data);
        });
    }, []);

    return (
        <div className={theme} id="page_repertoire">
            {/* Create an account page */}
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <div className="haut_de_page">
                <h2 className="titre">Repertoire</h2>
                <div className="rechLogo">
                    <img className="logo" srcSet="./LogoApp.svg" />
                </div>
            </div>
            <div className="bas_de_page">
                <NavigationDashboard />
                <div className="contenu">
                    <span className="searchAndAddButton">
                        <div className="input_box">
                            <input type="search" placeholder="Rechercher..." />
                            <span className="search">
                                <i class="uil uil-search search-icon"></i>
                            </span>
                        </div>
                        <NavLink to="/Repertoire/add">
                            <button className="boutonAddContact">Ajouter</button>
                        </NavLink>
                    </span>
                    <TableContainer component={Paper} className="tabListContact">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Photo</TableCell>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Prénom</TableCell>
                                    <TableCell>Entreprise</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contacts.map((contact) => (
                                    <TableRow key={contact.idcontact}>
                                        <TableCell><img className="photoContact" src={user} /></TableCell>
                                        <TableCell>{contact.lastname}</TableCell>
                                        <TableCell>{contact.firstname}</TableCell>
                                        <TableCell>{contact.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                {/* <TableContainer component={Paper} sx={{ maxHeight: 0.8 }} className="tabListContact">
                                <Table aria-label="simple table" size="small" stickyHeader>
                                    <TableHead >
                                        <TableRow>
                                            <TableCell sx={{ bgcolor: 'info.main' }} align="center">Entreprise</TableCell>
                                            <TableCell sx={{ bgcolor: 'info.main' }} align="left">Nom</TableCell>
                                            <TableCell sx={{ bgcolor: 'info.main' }} align="center">Prénom</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {contacts.map((contact) => (
                                            <TableRow
                                                key={contact.idcontact}
                                                hover
                                            // onClick={(event) => handleClick(event, contact.idcontact)}
                                            // selected={contact.idcontact === selectedIdcontact}
                                            >

                                                <TableCell align="center">{contact.idcustomer.name}</TableCell>
                                                <TableCell align="left">{contact.lastname}</TableCell>
                                                <TableCell align="center">{contact.firstname}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer> */}
            </div>
        </div>
    );
};

function AddContact(props) {

    const navigate = useNavigate();
    const [User, setUser] = useState({ name: "", email: "" });

    let add = (e) => {
        e.preventDefault();
        if (User.name === "" || User.email === "") {
            alert("All fields are mandatory!!!");
            return
        }
        // THIS IS USED TO SHOW THE LIST DATA ON THE APP.JS FILE 
        props.addContactHandler(User);
        // THIS IS USED FOR WHEN THE ADD BUTTON IS PRESSED THE INPUT FILED AGAIN GETS EMPTY
        setUser({ name: "", email: "" });
        //console.log(props);
        navigate('/');
    }
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" name="Name" placeholder='Name' value={User.name} onChange={e => setUser({ ...User, name: e.target.value })} />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="text" name="Email" placeholder='Email' value={User.email} onChange={e => setUser({ ...User, email: e.target.value })} />
                    </div>
                    <button className='ui secondary button'>Add</button>
                </form>
            </div>
        );
};



// function Repertoire() {

//     // NOW WITH THE USE OF HOOKS WE WILL GET THE CONTACTS
//     const LOCAL_STORAGE_KEY = "contacts"
//     const [contacts, setContacts] = useState([]);
//     const [SearchTerm, setSearchTerm] = useState("");
//     const [SearchResults, setSearchResults] = useState([]);

//     const addContactHandler = async (contact) => {
//         const request = {
//             id: uuid(),
//             ...contact
//         }
//         const response = await api.post("/contacts", request)
//         setContacts([...contacts, response.data]);
//     }

//     // UPDATE CONTACT
//     const updateContactHandler = async (contact) => {
//         const response = await api.put(`/contacts/${contact.id}`, contact);
//         const { id, name, email } = response.data;
//         setContacts(contacts.map(contact => {
//             return contact.id === id ? { ...response.data } : contact;
//         }))
//     }

//     // FOR DELETING THE ITEMS
//     const removeContactHandler = async (id) => {
//         await api.delete(`/contacts/${id}`);
//         const newContactList = contacts.filter((contact) => {
//             return contact.id !== id;
//         });
//         setContacts(newContactList);
//     }

//     // SEARCHING THE CONTACTS
//     const searchHandler = (searchTerm) => {
//         setSearchTerm(searchTerm);
//         if (searchTerm !== "") {
//             const newContactList = contacts.filter((contact) => {
//                 return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
//             });
//             setSearchResults(newContactList);
//         } else {
//             setSearchResults(contacts);
//         }
//     }

//     useEffect(() => {
//         const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//         if (retrieveContacts) setContacts(retrieveContacts);
//     }
//         , []);

//     useEffect(() => {
//         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//     }
//         , [contacts]);

//     return (
//         <div className="ui container">
//             <Router>
//                 <Header />
//                 <Routes>
//                     <Route path="/Repertoire/"
//                         element={<ContactList contacts={SearchTerm.length < 1 ? contacts : SearchResults} getContactId={removeContactHandler} term={SearchTerm} searchKeyword={searchHandler} />}
//                     render={(props)=><ContactList contacts={contacts} getContactId={removeContactHandler} {...props} />}
//                     />
//                     <Route path="/Repertoire/add"
//                         element={<AddContact addContactHandler={addContactHandler} />}
//                     //render={(props)=><AddContact {...props} addContactHandler={addContactHandler}/>}
//                     />
//                     <Route path="Repertoire/edit"
//                         element={<EditContact updateContactHandler={updateContactHandler} />}
//                     />
//                     <Route path="/Repertoire/contact/:id" element={<ContactDetail />} />
//                 </Routes>
//                 {/* <AddContact addContactHandler={addContactHandler}/> */}
//                 {/*Here in contact list props are used to get the values in the above contact array*/}
//                 {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
//             </Router>
//         </div>
//     )


// };

export default Repertoire;