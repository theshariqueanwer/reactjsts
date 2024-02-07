import React, { useState } from "react";

function AddTask({onAddTask}) {
  const [enteredTask, setEnteredTask] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }


  function handleClick() {
    if(enteredTask.trim() === '') {
        return;
    }
    onAddTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={enteredTask}
        onChange={handleChange}
        placeholder="Please Add Task"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-900"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
