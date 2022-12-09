// import classnames from "classnames";
// classnames sert pour mettre plusieurs classe concaténer, ensemble
import { plantList } from "../../data/PlantList";
import PlantCard from "../ShoppingList/PlantCard/PlantCard";
import useCart from "../Cart/useCart";
import styles from "./ShoppingList.module.scss";

function ShoppingList() {
  const { addPlant } = useCart();

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className={styles["shopping-list"]}>
      <select className={styles["cat-list"]}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button>Réinitialiser</button>
      <ul className={styles["plant-list"]}>
        {plantList.map((plant) => (
          <PlantCard key={plant.name} plant={plant} onClick={addPlant} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
