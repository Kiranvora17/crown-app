import DirectoryCard from "../directory-card/directory-card.component";
import style from "./directory.module.scss";

const Directory = ({ categories }) => {
  return (
    <div className={style.categoriesContainer}>
      {categories.map(({ id, title, imageUrl }) => (
        <DirectoryCard title={title} key={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
