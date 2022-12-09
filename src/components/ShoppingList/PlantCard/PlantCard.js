import CareScale from "../CareScale/CareScale";
import Price from "./Price/Price";
import styles from "./PlantCard.module.scss";

function PlantCard({ plant, onClick }) {
  // function plantRequierement(water, light) {
  //   let lightText = null;
  //   let waterText = null;
  //   switch (light) {
  //     case 1:
  //       lightText = "peu de lumière";
  //       break;
  //     case 2:
  //       lightText = "modérement de lumière";
  //       break;
  //     case 3:
  //       lightText = "beaucoup de lumière";
  //       break;
  //     default:
  //       break;
  //   }
  //   switch (water) {
  //     case 1:
  //       waterText = "peu d'arrosage";
  //       break;
  //     case 2:
  //       waterText = "modérement d'arrosage";
  //       break;
  //     case 3:
  //       waterText = "beaucoup d'arrosage";
  //       break;
  //     default:
  //       break;
  //   }

  //   if (!lightText || !waterText) return null;
  //   return "Cette plante requiert " + lightText + " et " + waterText;
  // }

  return (
    <li
      className={styles["plant-item"]}
      key={plant.name}
      onClick={() => {
        onClick(plant);
        // alert(plantRequierement(plant.water, plant.light));
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

export default PlantCard;
