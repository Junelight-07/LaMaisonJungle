// import classnames from "classnames";
import { plantList } from "../../data/PlantList";
import PlantCard from "../ShoppingList/PlantCard/PlantCard";
import styles from "./ShoppingList.module.scss";

function ShoppingList({ onClick }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className={styles["shopping-list"]}>
      <><ul className={styles["cat-list"]}>
          <select name="Choisir catégorie">
            {categories.map((cat) => (
              <option value="cat" selected>
                {cat}
              </option>
            ))}
          </select>
        </>

        <button for="cat">Réinitialiser</button>
      </ul>
      <ul className={styles["plant-list"]}>
        {plantList.map((plant) => (
          <PlantCard plant={plant} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
