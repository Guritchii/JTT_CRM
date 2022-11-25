import NavigationDashboard from '../components/NavigationDashboard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from '../images/user.jpg';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Paper } from '@mui/material';


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
                    <div className="input_box">
                        <input type="search" placeholder="Rechercher..." />
                        <span className="search">
                            <i class="uil uil-search search-icon"></i>
                        </span>
                    </div>
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
                        <button className="boutonAddContact">Ajouter</button>
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