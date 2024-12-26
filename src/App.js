import { useState } from "react";
import "./App.css";
import { PhoneBooke } from "./addContacts/add";
import { PhoneList } from "./contacts-list/contactsList";
import { SearchContacts } from "./contacts-list/contactsList";
import { ContactDetails } from "./ContactDetails/contactDetails";
import { EditContact } from "./Edit-contact/editContacts";

function App() {
  const [contactsList, setPhoneEntry] = useState([]);
  const [appState, setAppState] = useState(["DEFAULT"]);
  const [activeContactId, setActiveContactId] = useState(null);
  const [searchValue, setSeaarchValue] = useState("");

  const handleAddNewClick = () => {
    setAppState("CREATE_CONTACT");
    setActiveContactId(null);
  };

  const addUser = (user) => {
    setPhoneEntry([...contactsList, user]);
    setActiveContactId(user.id);
    setAppState("DEFAULT");
  };

  const handleContactClick = (contactID) => {
    console.log(contactID);
    setAppState("VIEW_CONTACT");
    setActiveContactId(contactID);
  };

  const activeContact = contactsList.find(
    (contact) => contact.id === activeContactId
  );

  const handleClickDeleteContact = () => {
    setPhoneEntry((v) => v.filter((el) => el.id !== activeContactId));
    setAppState("DEFAULT");
  };

  const handleSearchChange = (event) => {
    setSeaarchValue(event.target.value);
  };

  const handleEditContact = () => {
    setAppState("EDIT_CONTACT");
  };

  const handleCancelEditContact = () => {
    setAppState("VIEW_CONTACT");
  };

  const handleUpDateContact = (upDateContact) => {
    const newContactList = contactsList.map((contact) => {
      if (contact.id === upDateContact.id) {
        return upDateContact;
      } else {
        return contact;
      }
    });
    setPhoneEntry(newContactList);
    setAppState("VIEW_CONTACT");
  };

  const filterContacts = (contacts, filteredValue) =>
    contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(filteredValue.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(filteredValue.toLowerCase())
    );

  const filteredContacts = filterContacts(contactsList, searchValue);

  return (
    <div className="App">
      <div className="left-panel">
        <h3>My contacts list</h3>
        <div className="search-block">
          <SearchContacts value={searchValue} onChange={handleSearchChange} />
          <button type="button" className="btnAdd" onClick={handleAddNewClick}>
            Add new
          </button>
        </div>
        <PhoneList
          contactsL={filteredContacts}
          onContactClick={handleContactClick}
          activeContactId={activeContactId}
        />
      </div>
      <div className="info">
        {appState === "CREATE_CONTACT" && <PhoneBooke addUser={addUser} />}
        {appState === "VIEW_CONTACT" && (
          <ContactDetails
            onClickDeleteContact={handleClickDeleteContact}
            contact={activeContact}
            onEditContact={handleEditContact}
          />
        )}
        {appState === "EDIT_CONTACT" && (
          <EditContact
            contact={activeContact}
            onCancel={handleCancelEditContact}
            onUpDateContact={handleUpDateContact}
          />
        )}
      </div>
    </div>
  );
}

export default App;
