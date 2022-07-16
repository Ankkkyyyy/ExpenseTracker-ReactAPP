import Expenses from "./components/Expenses";
import React, {useState} from "react";

import NewExpense from "./components/NewExpenses/NewExpense";

import "./App.css";

let DUMMY_EXPENSE = [
    {
        id:'e1',
        title:'Books',
        amount:90,
        date: new Date(2022,7,15)
    },
    {
        id:'e2',
        title:'Flight',
        amount:900,
        date: new Date(2022,7,25)
    },
    {
        id:'e3',
        title:'Gym',
        amount:99,
        date: new Date(2022,7,29)
    },
    {
        id:'e4',
        title:'Travel',
        amount:99990,
        date: new Date(2022,7,15)
    }

];

const App =()=> {

    
    const [expenses,setExpenses] = useState(DUMMY_EXPENSE);

    // API Practice
//    fetch('https://reqres.in/api/users?page=2').then(response=>{
    
//    return response.json();
//      }
//    ).then(data=>{
//     console.log(data);
//     setExpenses(data);
//    }
   
//    );


   const addExpenseHandler = (expense)=>{
    const updatedExpense = [expense,...expenses];
          setExpenses(updatedExpense);
   };
    return(
        <div>
            <h2 className="title">Expense Tracker</h2>
            <NewExpense onAddExpense ={addExpenseHandler}/>
            <Expenses item={expenses}/>
            

        </div>
    );

}

export default App;


