import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contacts } from "./Contacts";
import { selectContact, selectAllContacts } from "../features/users/userSlice";

export const Contact = () => {
  const dispatch = useDispatch();
  const [SelectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.userSlice.contacts);
  const selectedContacts = useSelector((state) => state.userSlice.selectedContacts);
  const handleSelectAll = () => {
    dispatch(selectAllContacts());
    setSelectAll(!SelectAll); //update local state for checkbox display
  };
  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th style={{ textAlign: "left" }} scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  checked={
                    SelectAll ||
                    (selectedContacts &&
                      selectAllContacts.length === contacts.length)
                  } //consider both state and selected Contacts length
                  className="custom-control-input"
                  onChange={handleSelectAll}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style={{ textAlign: "left" }}>Phone</th>
            <th style={{ textAlign: "left" }}>Email</th>
            <th style={{ textAlign: "left" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const isSelected = selectedContacts.includes(contact.id);
            return (
              <Contacts
                contact={contact}
                key={contact.id}
                isSelected={isSelected}
                onSelect={() => dispatch(selectContact(contact.id))}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
