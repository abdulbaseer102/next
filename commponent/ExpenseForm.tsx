import React, { useState } from 'react'

function ExpenseForm({onAddEpense}:any) {
  const [desription, setDescription] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    if(desription.length>0 && amount){
      onAddEpense({
        id:Date.now(),
        desription:desription,
        amount:parseFloat(amount)
      });
      setDescription(""),
      setAmount("");
    }
  }
  return (
    <div className="mb-6">
     <form onSubmit={handleSubmit} className="space-y-5">
      <div  className="input-div w-full">
           <input 
           type="number"
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className=" h-12 px-4 rounded-lg text-gray-500"
            />
      </div>
      <br />
      <div className='w-full'> 
      <input 
           type="text"
            placeholder="Description"
            value={desription}
            onChange={(e) => setDescription(e.target.value)}
            className=" h-12 px-4 rounded-lg text-gray-500"
            />
      </div>
      <br />
      <div className="flex justify-end">
      <button type="submit" className="px-4 py-2 bg-gray-200 text-gray-500 rounded-lg shadow-md hover:bg-gray-300">
  ADD
</button>

      </div>
     </form>
    </div>
  )
}

export default ExpenseForm
