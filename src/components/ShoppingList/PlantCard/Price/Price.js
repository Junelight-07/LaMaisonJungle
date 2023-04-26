import styles from "./Price.module.scss";

export default function Price({ name, price, isSpecialOffer }) {
  if (!isSpecialOffer)
    return (
      <>
        <span className={styles["price"]}>{price + " €"}</span>{" "}
        <div>{name}</div>
      </>
    );
  return (
    <>
      <span className={styles["price"]}>
        <span className={styles["is-promotion"]}>{price + " €"}</span>
        {price / 2} €
      </span>
      <div>{name}</div>
    </>
  );
}
