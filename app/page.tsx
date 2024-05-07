'use client'
import ExpenseForm from "@/commponent/ExpenseForm";
import ExpenseList from "@/commponent/ExpenseList";
import { log } from "console";
import React,{useState} from "react";
export type Expense ={
  id:number
  desription:string
  amount:number
}
export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const addExpense = (expense:Expense) =>{
    setExpenses((pervExpenses)=>[...pervExpenses, expense])
  }
const deleteExpense = (id:number) =>{
 setExpenses((prevExpense)=>
  prevExpense.filter((expense:Expense)=> expense.id !== id)
 )
}
  return (
    <div>
   <h1 className="text-2x1 font-bold mb-4 text-center pb-4 text-gray-500">
    EXPENSE TRACKER
   </h1>
   <ExpenseForm onAddEpense ={addExpense}/>
   {expenses.length ?(
    <ExpenseList expenses = {expenses} onDeleteExpense = {deleteExpense} />
   ):null}
    </div>
  );
}
