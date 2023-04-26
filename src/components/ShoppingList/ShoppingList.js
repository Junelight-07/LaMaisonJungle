// import classnames from "classnames";
// classnames sert pour mettre plusieurs classe concaténer, ensemble
import { plantList } from "../../data/PlantList";
import PlantCard from "../ShoppingList/PlantCard/PlantCard";
import styles from "./ShoppingList.module.scss";
import { useState } from "react";
import Categories from "./Categories";

export default function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(plant) {
    const plantInCart = cart.find((p) => p.name === plant.name);
    const cartFilteredCurrentPlant = cart.filter((p) => p.name !== plant.name);
    updateCart([
      ...cartFilteredCurrentPlant,
      {
        ...plant,
        promoPrice: plant.isSpecialOffer ? plant.price / 2 : null,
        amount: plantInCart ? plantInCart.amount + 1 : 1,
      },
    ]);
  }

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
            <PlantCard
              key={plant.name}
              plant={plant}
              onClick={() => addToCart(plant)}
            />
          ) : null
        )}
      </ul>
    </div>
  );
}
