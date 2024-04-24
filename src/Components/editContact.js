import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUser } from "../features/users/userSlice";

export const Editcontact = () => {
  let { id } = useParams();
  let dispatch = useDispatch()
  const navigate = useNavigate();

  const user = useSelector(state =>
    state.users.find(user => user.id === parseInt(id))
  )  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);


  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    )
  }

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

  function editContact(e) {
    e.preventDefault();

    dispatch(editUser({ id, name, email, phone }))
    navigate("/");
  }

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                type="name"
                onChange={handleNameChange}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter name"
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                onChange={handleEmailChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter email"
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                onChange={handlePhoneChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter phone no"
                value={phone}
              />
            </div>

            <button type="button" className="btn btn-danger" onClick={editContact}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editcontact;
