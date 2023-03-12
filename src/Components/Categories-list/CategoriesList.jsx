import React, { useEffect, useState } from "react";
import { instance } from "../../Api/instance";
import Container from "../../Utils/Container/Container";
import CategoryItem from "./CategoryItem";
const CategoriesList = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    instance.get("https://api.escuelajs.co/api/v1/categories")
    .then((response) => setCategoryData(response.data));
  }, []);
  console.log(categoryData);
  return <section>
    <Container>
    <div className="category__item-wrapper">


{
 categoryData.map(item =>
  //  <CategoryItem img={item.image} title={item.name}/>
   <div className="category">
     <img className="category__item-img" src={item.image} alt="" />
   <h1 className="category__item-heading">{item.name}</h1>
   </div>
 )
}


</div>;
    </Container>
  </section>
};

export default CategoriesList;
