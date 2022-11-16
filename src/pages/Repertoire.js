import NavigationDashboard from '../components/NavigationDashboard';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from '../components/Contact/Header';
import AddContact from '../components/Contact/AddContact'
import ContactList from '../components/Contact/ContactList';
import ContactDetail from '../components/Contact/ContactDetail';
import EditContact from '../components/Contact/EditContact';
import axios from 'axios';
import user from '../images/user.jpg';
import {Link,useLocation} from'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

function Admin_list() {

    const [contact, setContacts] = useState([]);
    const [SearchTerm, setSearchTerm] = useState("");
    const [SearchResults, setSearchResults] = useState([]);

    useEffect(() =>{
        api.get('/Contact/All/').then((response) => {
            setContacts(response.data);
            setSearchTerm(response.data[0].idcontact);
        });
    }, []);

    const handleClick = (event, idcontact) => {
        setSearchTerm(idContact);
    };
    return (
        <div className='main'>
            <div className='ui center aligned card'>
                <div className='image'>
                    <img src={user} alt='user'></img>
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
            <Link to="/">
                <div className='center div'>
                    <button className='ui red button center aligned '>Contact List</button>
                </div>
            </Link>
        </div>
    );
}

function Repertoire() {

    // // NOW WITH THE USE OF HOOKS WE WILL GET THE CONTACTS
    // const LOCAL_STORAGE_KEY = "contacts"
    // const [contacts, setContacts] = useState([]);
    // const [SearchTerm, setSearchTerm] = useState("");
    // const [SearchResults, setSearchResults] = useState([]);

    // const addContactHandler = async (contact) => {
    //     const request = {
    //         id: uuid(),
    //         ...contact
    //     }
    //     const response = await api.post("/contacts", request)
    //     setContacts([...contacts, response.data]);
    // }

    // // UPDATE CONTACT
    // const updateContactHandler = async (contact) => {
    //     const response = await api.put(`/contacts/${contact.id}`, contact);
    //     const { id, name, email } = response.data;
    //     setContacts(contacts.map(contact => {
    //         return contact.id === id ? { ...response.data } : contact;
    //     }))
    // }

    // // FOR DELETING THE ITEMS
    // const removeContactHandler = async (id) => {
    //     await api.delete(`/contacts/${id}`);
    //     const newContactList = contacts.filter((contact) => {
    //         return contact.id !== id;
    //     });
    //     setContacts(newContactList);
    // }

    // // SEARCHING THE CONTACTS
    // const searchHandler = (searchTerm) => {
    //     setSearchTerm(searchTerm);
    //     if (searchTerm !== "") {
    //         const newContactList = contacts.filter((contact) => {
    //             return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
    //         });
    //         setSearchResults(newContactList);
    //     } else {
    //         setSearchResults(contacts);
    //     }
    // }

    // useEffect(() => {
    //     const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //     if (retrieveContacts) setContacts(retrieveContacts);
    // }
    //     , []);

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }
    //     , [contacts]);

    // return (
    //     <div className="ui container">
    //         <Router>
    //             <Header />
    //             <Routes>
    //                 <Route path="/Repertoire/"
    //                     element={<ContactList contacts={SearchTerm.length < 1 ? contacts : SearchResults} getContactId={removeContactHandler} term={SearchTerm} searchKeyword={searchHandler} />}
    //                 render={(props)=><ContactList contacts={contacts} getContactId={removeContactHandler} {...props} />}
    //                 />
    //                 <Route path="/Repertoire/add"
    //                     element={<AddContact addContactHandler={addContactHandler} />}
    //                 //render={(props)=><AddContact {...props} addContactHandler={addContactHandler}/>}
    //                 />
    //                 <Route path="Repertoire/edit"
    //                     element={<EditContact updateContactHandler={updateContactHandler} />}
    //                 />
    //                 <Route path="/Repertoire/contact/:id" element={<ContactDetail />} />
    //             </Routes>
    //             {/* <AddContact addContactHandler={addContactHandler}/> */}
    //             {/*Here in contact list props are used to get the values in the above contact array*/}
    //             {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
    //         </Router>
    //     </div>
    // )


};

export default Repertoire;