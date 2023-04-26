import CareScale from "../CareScale/CareScale";
import Price from "./Price/Price";
import styles from "./PlantCard.module.scss";

export default function PlantCard({ plant, onClick }) {
  return (
    <li
      className={styles["plant-item"]}
      key={plant.name}
      onClick={() => {
        onClick(plant.name, plant.price);
      }}
    >
      <img
        className={styles["plant-item-cover"]}
        src={plant.cover}
        alt={`${plant.name} cover`}
      />
      <Price {...plant} />
      <CareScale careType="light" scaleValue={plant.light} />
      <CareScale careType="water" scaleValue={plant.water} />
      {plant.isBestSale && (
        <span className={styles["plant-item-best-sale"]}>
          Meilleure vente 🔥
        </span>
      )}
    </li>
  );
}
