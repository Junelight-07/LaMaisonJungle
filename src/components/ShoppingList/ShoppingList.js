// import classnames from "classnames";
// classnames sert pour mettre plusieurs classe concaténer, ensemble
import { plantList } from "../../data/PlantList";
import PlantCard from "../ShoppingList/PlantCard/PlantCard";
import styles from "./ShoppingList.module.scss";
import useCart from "../Cart/Cart";
import { useState } from "react";
import Categories from "./Categories";

function ShoppingList() {
  const { addPlant } = useCart();
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className={styles["shopping-list"]}>
      <div style={{ display: "flex", marginTop: 10 }}>
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </div>
      <ul className={styles["plant-list"]}>
        {plantList.map((plant) =>
          !activeCategory || activeCategory === plant.category ? (
            <PlantCard key={plant.name} plant={plant} onClick={addPlant} />
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
