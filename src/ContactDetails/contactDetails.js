function ContactDetails(props) {
  console.log(props.contact);

  return (
    <div>
      <h3>Contact Details:</h3>
      <ul className="list">
        <li className="field">
          <div className="bold-font">First Name:</div>
          <div>{props.contact.firstName}</div>
        </li>
        <li className="field">
          <div className="bold-font">Last Name:</div>
          <div>{props.contact.lastName}</div>
        </li>
        <li className="field">
          <div className="bold-font">Email:</div>
          <div>{props.contact.email}</div>
        </li>
        <li className="field">
          <div className="bold-font">Phone:</div>
          <div>{props.contact.phone}</div>
        </li>
      </ul>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          className="btn-edit-del"
          type="button"
          onClick={props.onEditContact}
        >
          Edit
        </button>
        <button
          className="btn-edit-del"
          type="button"
          onClick={props.onClickDeleteContact}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export { ContactDetails };
