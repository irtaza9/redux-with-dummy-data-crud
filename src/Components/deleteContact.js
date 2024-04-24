import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser } from "../features/users/userSlice";

export const Deletecontact = () => {

  let { id } = useParams();
  let dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("pakistan");

  const user = useSelector((state) =>
    state.users.find((user) => user.id === parseInt(id))
  );

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  function handleDelete() {
    dispatch(deleteUser(id));
    navigate("/");
  }

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Delete contact</div>
        <div className="card-body">
          <p>Are you sure you want to delete {user.name}?</p>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button type="button" className="btn btn-secondary ml-2" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deletecontact;
