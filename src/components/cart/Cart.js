import styles from "./Cart.module.scss";
import { useState } from "react";

export default function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);

  const total = cart.reduce(
    (acc, plant) =>
      acc +
      plant.amount * (plant.isSpecialOffer ? plant.promoPrice : plant.price),
    0
  );

  return isOpen ? (
    <div className={styles["Cart"]}>
      <button
        className={styles["button-closing"]}
        onClick={() => setIsOpen(false)}
      >
        {"Fermer"}
      </button>
      <div className={styles["align-center"]}>
        <h2 className={styles["Cart-panier"]}>{"Panier"}</h2>
      </div>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map(
              ({ name, price, amount, isSpecialOffer, promoPrice }, index) => {
                return (
                  <div key={`${name}-${index}`}>
                    {name} {isSpecialOffer ? promoPrice : price}
                    {"€ x"} {amount}
                  </div>
                );
              }
            )}
          </ul>
          <h3>
            {"Total : "}
            {total}
            {"€"}
          </h3>
          <div className={styles["align-center"]}>
            <button
              className={styles["button-empty"]}
              onClick={() => updateCart([])}
            >
              {"Vider le panier"}
            </button>
          </div>
        </div>
      ) : (
        <div>{"Votre panier est vide"}</div>
      )}
    </div>
  ) : (
    <button
      className={styles["button-opening"]}
      onClick={() => setIsOpen(true)}
    >
      {"Ouvrir le Panier"}
    </button>
  );
}
