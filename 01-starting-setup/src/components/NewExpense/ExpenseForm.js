import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    //Two Different ways of handling state

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        //If you depend on prevState
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value}
        // })
    }

    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
    }

    const dateChangeHandler = e => {
        setEnteredDate(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2033-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
