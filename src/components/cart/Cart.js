import styles from "./Cart.module.scss";
import { useState } from "react";
import useCart from "./useCart";

function Cart() {
  const { plants, getTotalPlants } = useCart();
  const [isOpen, setIsOpen] = useState(false);

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
        {plants.map((plant) => (
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
