import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Category from "../../components/category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index Component={CategoryPreview} />
      <Route path=":category" Component={Category} />
    </Routes>
  );
};

export default Shop;
