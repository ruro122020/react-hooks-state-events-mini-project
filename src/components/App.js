import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [tasks, setTasks] = useState(TASKS)
  
  const onTasksDelete=(taskObj)=>{
    const newTasks = tasks.filter(task=> task.text !== taskObj.text)
    setTasks(newTasks)
  }
  const onTaskFormSubmit=(formData)=>{
    setTasks(prevTasks =>{
      return [...prevTasks, formData]
    })
  }
  const filteredTasks = tasks.filter(task =>{
    if(selectedCategory === '' || selectedCategory === 'All') return true
    
    return task.category === selectedCategory
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} selectedCategory={selectedCategory} onTasksDelete={onTasksDelete}/>
    </div>
  );
}

export default App;
