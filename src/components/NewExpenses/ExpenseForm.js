import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm =(props)=>{


    const [enteredTitle,setEnteredTitle]= useState('');

    const titleChangeHandler=(event)=>{

        setEnteredTitle(event.target.value);

    };

    const [enteredAmount,setEnteredAmount]= useState('');
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };

    const [enteredDate,setEnteredDate]= useState('');
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);

    };

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle, 
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        // props.onSaveExpenseData();
//  For making the input blank after button was clicked
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
     <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Enter Title :</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />  
                <label>Enter Amount :</label>
                <input type="number" value={enteredAmount}  onChange={amountChangeHandler}/> 
                <label>Enter Date :</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} />

                <div className="new-expense_actions">
                    <button type="submit">Add Expense</button>
                </div>


            </div>
        </div>
     </form>

    );

}

export default ExpenseForm;