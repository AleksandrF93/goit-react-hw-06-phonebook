import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import ContactFilter from 'components/ContactFilter';

export default function App() {

  return (
    <section>
      <h1>PhoneBook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <ContactFilter/>
      <ContactsList/>
    </section>
  )
};
