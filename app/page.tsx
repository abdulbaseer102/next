'use client'
import ExpenseForm from "@/commponent/ExpenseForm";
import ExpenseList from "@/commponent/ExpenseList";
import React, { useState } from "react";

export type Expense = {
  id: number;
  description: string;
  amount: number;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  }

  const deleteExpense = (id: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense: Expense) => expense.id !== id)
    );
  }

  return (
    <div>
      <h1 className="text-2x1 font-bold mb-4 text-center pb-4 text-gray-500">
        EXPENSE TRACKER
      </h1>
      <ExpenseForm onAddExpense={addExpense} />
      {expenses.length ? (
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      ) : null}
    </div>
  );
}
