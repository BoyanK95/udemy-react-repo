import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const addUserHandler = (ev) => {
        ev.preventDefault()
    }


  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type='text'></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type='number'></input>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;
