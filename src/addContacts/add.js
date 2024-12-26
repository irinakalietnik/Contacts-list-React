import React from "react";
import "./add.css";
//import { useState } from "react";

function PhoneBooke(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    const contact = { ...obj, id: Date.now() };

    props.addUser(contact);
  };

  return (
    <div className="add-container">
      <h3>Add Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <button className="btnAdd">Submit</button>
      </form>
    </div>
  );
}

// function PhoneList(props) {
//   return (
//     <table>
//       <tr>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Phone Number</th>
//         <th>Delete contact</th>
//       </tr>
//       {props.phoneEntry.map((el) => {
//         console.log(el.id);

//         return (
//           <tr key={el.id}>
//             <td>
//               <input defaultValue={el.fName} />
//             </td>
//             <td>
//               <input defaultValue={el.lName} />
//             </td>
//             <td>
//               <input defaultValue={el.email} />
//             </td>
//             <td>
//               <input defaultValue={el.phone} />
//             </td>
//             <td>
//               <button onClick={() => props.removeItem(el.id)}>delete</button>
//             </td>
//           </tr>
//         );
//       })}
//     </table>
//   );
// }

export { PhoneBooke };
