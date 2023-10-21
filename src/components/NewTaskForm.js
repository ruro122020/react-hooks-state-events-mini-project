import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text:'',
    category:''
  })

  const newCategories = categories.filter(category=> category !== 'All')
  const categoryOptions = newCategories.map(category => <option key={category} value={category}>{category}</option>)
  const handleChange =(e)=>{
    const {name, value } = e.target 
    setFormData({
      ...formData,
      [name]: value 
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    onTaskFormSubmit(formData)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
          <option value='Category'>Category</option>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
