import React from "react";
import Task from './Task'
function TaskList({tasks, onTasksDelete}) {
  let key = 1
  const tasksList = tasks.map(task =><Task key={key++} category={task.category} text={task.text}  onTasksDelete={onTasksDelete}/>)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksList}
    </div>
  );
}

export default TaskList;
