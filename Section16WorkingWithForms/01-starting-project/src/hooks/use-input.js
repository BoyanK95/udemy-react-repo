import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  function valueChangeHandler(ev) {
    setEnteredValue(ev.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler
  };
};

export default useInput;
