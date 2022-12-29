import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const enteredValue = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

  function nameInputChangeHandler(ev) {
    setEnteredName(ev.target.value);
  }

  function formSubmitHandler(ev) {
    ev.preventDefault();

    if (enteredName.trim() == '') {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)

    console.log(enteredName);

    const enteredCurrentValue = enteredValue.current.value;
    console.log(enteredCurrentValue);

    setEnteredName("");
  }

  const nameInputClass = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={enteredValue}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
