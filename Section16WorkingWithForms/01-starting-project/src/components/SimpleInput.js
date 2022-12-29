import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const enteredValue = useRef();
  const [enteredName, setEnteredName] = useState("");

  function nameInputChangeHandler(ev) {
    setEnteredName(ev.target.value);
  }

  function formSubmitHandler(ev) {
    ev.preventDefault();
    console.log(enteredName);

    const enteredCurrentValue = enteredValue.current.value;
    console.log(enteredCurrentValue);

    setEnteredName("");
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={enteredValue}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
