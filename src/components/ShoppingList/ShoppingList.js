import { plantList } from "../../Datas/PlantList";
import PlantCard from "../ShoppingList/PlantCard/PlantCard";
import styles from "./ShoppingList.module.scss";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div className={styles.shoppingList}>
      <ul className="cat-list flex">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="plant-list flex">
        {plantList.map((plant) => (
          <PlantCard plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
