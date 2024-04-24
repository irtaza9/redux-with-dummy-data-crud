import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editUser } from "../features/users/userSlice";

export const Contacts = ({ contact, isSelected, onSelect }) => {
  const dispatch = useDispatch();
  if (!contact) {
    return null;
  }
  const { name, phone, email, id } = contact; //destructure
  const handleSelect = () => {
    onSelect();
  };
  return (
    <tr>
      <td style={{ textAlign: "left" }} scope="row">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleSelect}
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td style={{ textAlign: "left" }}>
        <Avatar name={name} size="35" round={true} />
        <span>{name}</span>
      </td>
      <td style={{ textAlign: "left" }}>{phone}</td>
      <td style={{ textAlign: "left" }}>{email}</td>
      <td style={{ textAlign: "left" }}>
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <Link to={`/contacts/delete/${id}`}>
          <button>
            <span className="material-icons">remove_circle</span>
          </button>
        </Link>
      </td>
    </tr>
  );
};
