import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import { postUser } from "../features/users/userSlice";

export const Addcontact = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch(); //connect react and redux together

  // Event handler to update name state
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Event handler to update email state
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // Event handler to update phone state
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function createContact(e) {
    e.preventDefault();

    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };

    dispatch(postUser(new_contact));
    history("/");
  }

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form onSubmit={(e) => createContact(e)} className="form">
            <div className="form-group">
              <input
                type="name"
                onChange={handleNameChange}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                onChange={handleEmailChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                onChange={handlePhoneChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter phone no"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
