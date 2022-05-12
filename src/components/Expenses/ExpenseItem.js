import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2022, 2, 24);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;

  //second input is function to change title
  const [title, setTitle] = useState(props.title);

  // let title = props.title;

  function clickHandler() {
    //We wont assign values by assignment but by calling a func from use state!
    setTitle("Updated!");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
