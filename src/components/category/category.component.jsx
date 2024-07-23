import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";

import style from "./category.module.scss";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      <h1 className={style.categoryTitle}>{category.toUpperCase()}</h1>
      <div className={style.categoryContainer}>
        {categories[category] &&
          categories[category].map((prd) => {
            return <ProductCard key={prd.id} product={prd} />;
          })}
      </div>
    </>
  );
};

export default Category;
