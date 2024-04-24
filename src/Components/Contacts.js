import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

export const Contacts = ({ contact }) => {
  const { name, phone, email, id } = contact;

  return (
    <tr>
      <td scope="row">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar name={name} size="35" round={true} />
        <span style={{ display: "inline-block" }}>{name}</span>
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <Link to="#">
          <span className="material-icons">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
};
