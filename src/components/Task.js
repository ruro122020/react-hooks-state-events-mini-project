import React from "react";

function Task({category, text, onTasksDelete}) {

  const handleDelete=()=>{
    onTasksDelete({ text: text, category: category})
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
