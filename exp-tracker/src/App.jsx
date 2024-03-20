import axios from "axios"
import { useEffect, useState } from "react"
import Expenseitem from "./components/Expenseitem"
import Forms from "./components/Forms"




const App=()=>{
  const[expenses,setExpense]=useState([])
   
  useEffect(()=>{
  axios.get("https://expenseryrackingsystem.onrender.com/get-entry").then(res=>{
    console.log(res.data)
    setExpense(res.data)
  }).catch(err=>console.log(err))
  },[])


  const addExpense=(title,cash)=>{
    const nextId = expenses[expenses.length - 1].id +1
    setExpense([...expenses,{id: nextId, title:title,amount:cash}])
  }
  const deleteExpense=(id)=>{
    setExpense(expenses.filter((exp)=>exp.id !== id))
  }
  let income=0
  let expense=0
    expenses.forEach(element => {
      if(element.amount>0){
        income+= element.amount
      }
      else{
        expense += element.amount
      }
    });
   let balance= income + expense 
  return(
   <>
   <Forms addExpense={addExpense}/>
   <div class="mainbox">   <div class="box1"><span class="balance">BALANCE</span>
     <span>{balance}</span>
       </div></div>
   <div class="expensecalci">
   <div classs="income-box">
     <div class="box"><span class="income">INCOME</span>
     <span>{income}</span>
       </div></div>
    <div classs="expense-box">
     <div class="box"><span class="expense">EXPENSE</span>
     <span>{expense}</span>
       </div></div>
       </div>

      
   {expenses.map((expense)=>(
    <Expenseitem key={expense.id} title={expense.title} amount={expense.amount} deleteExpense={deleteExpense} id={expense.id}/>
   ))}
  
     
   </> )
}
export default App