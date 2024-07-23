import style from "./directory-card.module.scss";

const DirectoryCard = ({ title, imageUrl }) => {
  return (
    <div className={style.directoryCardContainer}>
      <div
        className={style.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className={style.directoryCardBodyContainer}>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default DirectoryCard;
