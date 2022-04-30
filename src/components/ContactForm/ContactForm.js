import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact} from '../../redux/contactSlice'
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const onSubmit = data => {
    const sameName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    const sameNumber = contacts.find(contact => contact.number.toLowerCase() === data.number.toLowerCase());
    const message = `${data.name} is alredy in contacts`;

    if (sameName || sameNumber) {
      alert(message);
      return
    };

    if (contacts) {
      dispatch(
        addContact({
        id: nanoid(),
        name: data.name,
        number: data.number
    }))
    };
  };

  const handleChangeName = (e) => {
   setName(e.currentTarget.value);
   };

  const handleChangeNumber = e => {
     setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}> Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId}>Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
          id={numberInputId}
        />
      </label>
      <button className={s.button} type="submit">Add contact</button>
    </form>
  );
}
