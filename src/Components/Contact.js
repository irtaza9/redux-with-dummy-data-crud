import React from "react";
import { useSelector } from "react-redux";
import { Contacts } from "./Contacts";

export const Contact = () => {
  const contacts = useSelector((state) => state.users);

  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return <Contacts contact={contact} key={contact.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
