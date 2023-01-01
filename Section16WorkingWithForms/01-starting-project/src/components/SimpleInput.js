import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value:enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInpuHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(validateEmail)

  function validateEmail(value) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return value.trim().match(regex)
  }
  
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  function formSubmitHandler(ev) {
    ev.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = emailInpuHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInpuHasError && (
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
