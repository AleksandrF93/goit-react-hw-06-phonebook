import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { onDeleteContact } from 'redux/contactSlice';
import s from './ConatctListItem.module.css';

const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    return (
        <li key={id}><span>{name}:</span>
            <span>{number}</span>
            <button className={s.button} onClick={() => dispatch(onDeleteContact(id))}>Delete</button>
        </li>
    )
};

export default ContactListItem;

ContactListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string
};