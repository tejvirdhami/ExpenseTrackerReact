import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2022, 2, 24);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;
  let title = props.title;
  function clickHandler() {
    title = "Updated";
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
