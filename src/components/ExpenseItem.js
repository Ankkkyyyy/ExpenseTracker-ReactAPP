import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import swal from 'sweetalert';
import React,{useState} from "react";

function ExpenseItem(props)
{ 


    return(
    <div className="expense-item" >
            <ExpenseDate date={props.date}/>
              <h2> { props.title } </h2>
            <div className="expense-item__price">${props.amount}</div>
         
    </div>

    );

}

export default ExpenseItem;