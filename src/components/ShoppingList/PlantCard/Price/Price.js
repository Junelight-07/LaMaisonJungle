import styles from "./Price.module.scss";

function Price({ name, price, isSpecialOffer }) {
  if (!isSpecialOffer)
    return (
      <div>
        {name}: {price + " €"}
      </div>
    );
  return (
    <div>
      {name}: <span className={styles["is-promotion"]}>{price + " €"}</span>{" "}
      {price / 2} €
    </div>
  );
}

export default Price;
