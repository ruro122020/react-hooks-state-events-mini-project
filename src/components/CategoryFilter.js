import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const handleClick=(category)=>{
    setSelectedCategory(category)
  }
  const categoryButtons = categories.map(category => <button className={selectedCategory === category ? 'selected': null} key={category} onClick={()=>handleClick(category)}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
