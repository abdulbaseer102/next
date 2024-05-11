import { Expense } from '@/app/page';
import React from 'react';

function ExpenseList({ expenses, onDeleteExpense }: { expenses: Array<Expense>, onDeleteExpense: any }) {
  const handlePrintList = () => {
    window.print();
  };

  return (
    <>
      <br />
      <button onClick={handlePrintList} className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow-md hover:bg-blue-500">
        Print List
      </button>
      <br />
      <div id="printSection" className="hidden">
        <ul className="space-y-4">
          {expenses.map((expense: Expense) => (
            <li key={expense.id} className="flex justify-between items-center px-4 py-2">
              <div className='text-gray-500 hidden'>
                <div className='font-bold'>PKR{expense.amount.toFixed(2)}</div>
                <div > {expense.description}</div>
              </div>
              <button
                onClick={() => onDeleteExpense(expense.id)}
                className="px-3 py-1 m-2 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-500 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 18L18 6M6 6l12 12" />
                </svg>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ExpenseList;
