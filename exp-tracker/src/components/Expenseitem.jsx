const Expenseitem =(props)=>{
    const{id, title,amount, deleteExpense}=props
const handledelete =()=>{
    deleteExpense(id)
}
    return(
        <>
        
        <div class={`tracker ${amount>0?'positive':'negative'}`}>
            <div class="title">{title}</div>
            <div class="amount">{amount}</div>
            <div><button class="delete-btn" type="onClick" onClick={handledelete}>DELETE</button></div>
        </div>
        </>
    )
}
export default Expenseitem