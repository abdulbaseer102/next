import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }: { onAddExpense: any }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.length > 0 && amount) {
      onAddExpense({
        id: Date.now(),
        description: description,
        amount: parseFloat(amount)
      });
      setDescription("");
      setAmount("");
    }
  }

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="input-div w-auto">
          <input
            type="number"
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-12 px-4 rounded-lg text-gray-500"
          />
        </div>
        <br />
        <div className='w-full'>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-12 px-4 rounded-lg text-gray-500"
          />
        </div>
        <br />
        <div className="flex justify-end">
          <button type="submit" className="button px-4 py-2 bg-gray-200 text-gray-500 rounded-lg">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
