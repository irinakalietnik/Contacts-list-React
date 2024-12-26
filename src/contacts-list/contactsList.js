import "./contact-list.css";
import React from "react";
function PhoneList(props) {
  return (
    <div className="list">
      {props.contactsL.map((el) => (
        <div 
          key={el.id}
          className={`item ${el.id === props.activeContactId ? "active" : ""}`}
          onClick={() => props.onContactClick(el.id)}
        >
          {`${el.firstName} ${el.lastName}`}
        </div>
      ))}
    </div>
  );
}

function SearchContacts(props) {
  return (
    <div className="search">
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder="...search contact"
      />
    </div>
  );
}
export { PhoneList, SearchContacts };
