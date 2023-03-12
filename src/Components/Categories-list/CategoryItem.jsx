import React from 'react'
import "../Categories-list/CategoryItem.scss";
const  CategoryItem = (img,title) => {
  return (
    <div>
      <img src={img} alt="" />

      <h2>{title}</h2>
    </div>
  )
}
export default CategoryItem;

