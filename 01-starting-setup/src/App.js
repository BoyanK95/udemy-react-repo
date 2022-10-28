import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expeses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!!!</h2>
      <ExpenseItem
        title={expeses[0].title}
        amount={expeses[0].amount}
        date={expeses[0].date}
      />
      <ExpenseItem
        title={expeses[1].title}
        amount={expeses[1].amount}
        date={expeses[1].date}
      />
      <ExpenseItem
        title={expeses[2].title}
        amount={expeses[2].amount}
        date={expeses[2].date}
      />
      <ExpenseItem
        title={expeses[3].title}
        amount={expeses[3].amount}
        date={expeses[3].date}
      />
    </div>
  );
}

export default App;
