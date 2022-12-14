import styles from "./Cart.module.scss";
import { useState } from "react";

function Cart() {
  function useCart() {
    const [purchasedPlants, setpurchasedPlants] = useState([]);

    function addPlant(plant) {
      setpurchasedPlants((curr) => [...curr, plant]);
    }

    function getTotalPlants() {
      let total = 0;
      for (let index = 0; index < purchasedPlants.length; index++) {
        total += purchasedPlants[index].price;
      }

      if (!purchasedPlants.length) return <li>Votre panier est vide</li>;
      return <li> Total : {total} € </li>;
    }

    return {
      purchasedPlants,
      addPlant,
      getTotalPlants,
    };
  }

  const { purchasedPlants, getTotalPlants } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  // isOpen sert à mettre la valeur par défaut à fermé donc faire apparaitre un bouton pour ouvrir le panier sinon, si bouton cliqué donc panier ouvert, faire apparaitre le panier et le bouton pour fermer

  return isOpen ? (
    <div className={styles["Cart"]}>
      <div className={styles["Cart-panier"]}>Panier</div>
      <button
        className={styles["button-closing"]}
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <ul>
        {purchasedPlants.map((plant) => (
          <li key={plant.name}>
            {plant.name} {plant.price} €
          </li>
        ))}
        {getTotalPlants()}
      </ul>
      {/* <button onClick={() => updateCart(0)}>Vider le panier</button> */}
    </div>
  ) : (
    <button
      className={styles["button-opening"]}
      onClick={() => setIsOpen(true)}
    >
      Ouvrir le Panier
    </button>
  );
}

export default Cart;
