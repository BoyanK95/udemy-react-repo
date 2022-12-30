import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  let formIsValid = false

  if (enteredNameIsValid) {
    formIsValid = true
  }

  function nameInputChangeHandler(ev) {
    setEnteredName(ev.target.value);
  }

  function nameInputBlurHandler() {
    setEnteredNameTouched(true)
  }

  function formSubmitHandler(ev) {
    ev.preventDefault();
    setEnteredNameTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false)
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
