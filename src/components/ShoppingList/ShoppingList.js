// import classnames from "classnames";
import { plantList } from "../../data/PlantList";
import PlantCard from "../ShoppingList/PlantCard/PlantCard";
import styles from "./ShoppingList.module.scss";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className={styles["shopping-list"]}>
      <ul className={styles["cat-list"]}>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className={styles["plant-list"]}>
        {plantList.map((plant) => (
          <PlantCard plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
