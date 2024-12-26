function EditContact({ contact, onUpDateContact, onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    const contactUser = { ...obj, id: contact.id };

    onUpDateContact(contactUser);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          defaultValue={contact.firstName}
        />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue={contact.lastName}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue={contact.email}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          defaultValue={contact.phone}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button className="btnAdd">Submit</button>
        <button className="btnCancel" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
export { EditContact };
