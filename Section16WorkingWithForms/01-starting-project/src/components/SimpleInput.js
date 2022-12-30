import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const enteredEmailIsValid = enteredEmail.trim().match(regex) ? true : false
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  function nameInputChangeHandler(ev) {
    setEnteredName(ev.target.value);
  }

  function nameInputBlurHandler() {
    setEnteredNameTouched(true)
  }

  function emailInputChangeHandler(ev) {
    setEnteredEmail(ev.target.value);
  }

  function emailInputBlurHandler() {
    setEnteredEmailTouched(true)
  }

  function formSubmitHandler(ev) {
    ev.preventDefault();
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={nameInputClass}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid Email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
