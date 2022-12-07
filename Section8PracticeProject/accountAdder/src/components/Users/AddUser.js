import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
    const addUserHandler = (ev) => {
        ev.preventDefault()
    }


  return (
    <Card>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type='text'></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type='number'></input>
      <button type="submit">Add User</button>
    </form>
    </Card>
  );
};

export default AddUser;
