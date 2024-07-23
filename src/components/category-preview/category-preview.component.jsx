import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import style from "./category-preview.module.scss";

const CategoryPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((title) => {
        return (
          <div key={title}>
            <h2>
              <Link to={title}>{title}</Link>
            </h2>
            <div className={style.productsContainer}>
              {categories[title]
                .filter((_, index) => index < 4)
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryPreview;
