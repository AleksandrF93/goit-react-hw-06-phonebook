import React from "react";
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactListItem';

export default function ContactsList() {
    const filters = useSelector(state => state.filter);
    const contacts = useSelector(state => state.contact);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));
    return (
        <>
            <ul>
                {filteredContacts.map(({ id, name, number }) => (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                    number={number}/>
                        
                ))}
            </ul>
        </>
    );
};