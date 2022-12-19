import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amounInputRef = useRef();
  const submitHandler = (ev) => {
    ev.preventDefault();

    const enteredAmount = amounInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //Converting it to a Number, same as Number(enteredAmount)

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amounInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: 10,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p className={classes.error}>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
