import { useState } from "react"
const Forms =(props)=>{
    const {addExpense}=props
    const [titles,setTitle]=useState('')
    const [cash,setCash]=useState(0)
    const [error,setError]=useState({})
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(titles,cash)
        let err={}
        if(titles.length<3){
            err.titles ='Title should be atleast 3 char'
        }
        if(!cash){
            err.cash ='Enter a valid amount'
        }
        if(Object.keys(err).length>0){
            setError({...err})
            return
        }
        /* if(!cash){
            alert("enter a valid amount")
           
        }
        if(titles.length >3){
            setError({...error,titles:"should exceed 3 letters "})
            return
        }*/
       
        addExpense(titles,cash)
    }
   
const handleTitleChange=(e)=>{
        console.log(e.target.value)
        setTitle(e.target.value)
        setError({...error,titles:""})
    }
    const handleCashChange=(e)=>{
        console.log(e.target.value)
        setCash(parseInt(e.target.value))
        setError({...error,cash:""}) //to remove the error once we start typing
    }
    return(
 <form class="form" onSubmit={handleSubmit}>
     <div class="outerbox">
       <div class="reason">Title:<span class="textbox"><input type="text" id="titles" value={titles} onChange={handleTitleChange}/></span>
        {error.titles?<div class="error1">{error.titles}</div>:null}  
       </div>
       <div class="cost">Amount:<span class="textbox"><input type="text" id="cash" value={cash} onChange={handleCashChange} /></span>
       </div>
       {error.cash?<div class="error2">{error.cash}</div>:null}  
       <div class="Submit"><button  type ="submit">Add transaction</button></div>
 
     </div>
     
 
     </form>
    )}
export default Forms