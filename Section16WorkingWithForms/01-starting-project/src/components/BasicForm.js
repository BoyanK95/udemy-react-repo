import useInput from "../hooks/use-input";
import { validateEmail } from "../hooks/validateEmail";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: enteredSecondName,
    isValid: enteredSecondNameIsValid,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameChangeHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredSecondNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  function formSubmitHandler(ev) {
    ev.preventDefault();

    if (!formIsValid) {
      return
    }

    console.log('Submited');
    console.log(enteredFirstName);
    console.log(enteredSecondName);
    console.log(enteredEmail);

    resetFirstName()
    resetSecondName()
    resetEmail()
  }

  const firstNameClases = firstNameHasError ? 'form-control invalid' : 'form-control'
  const secondNameClases = secondNameHasError ? 'form-control invalid' : 'form-control'
  const emailClases = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClases}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={secondNameClases}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredSecondName}
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClases}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
