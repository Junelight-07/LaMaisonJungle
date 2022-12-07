import CareScale from "../CareScale/CareScale";
import Price from "./Price/Price";
import styles from "./PlantCard.module.scss";

function PlantCard({ plant, onClick }) {
  return (
    <li
      className={styles["plant-item"]}
      key={plant.name}
      onClick={() => onClick(plant)}
    >
      <img
        className={styles["plant-item-cover"]}
        src={plant.cover}
        alt={`${plant.name} cover`}
      />
      <Price {...plant} />
      <CareScale careType="water" scaleValue={plant.water} />
      <CareScale careType="light" scaleValue={plant.light} />
      {plant.isBestSale && (
        <span className={styles["plant-item-best-sale"]}>
          Meilleure vente 🔥
        </span>
      )}
    </li>
  );
}

export default PlantCard;
