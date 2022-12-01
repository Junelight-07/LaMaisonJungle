import styles from "./Price.module.scss";

function Price({ name, price, isSpecialOffer }) {
  if (!isSpecialOffer)
    return (
      <div>
        {name}: {price + " €"}
      </div>
    );
  return (
    <>
      <div className={styles["is-promotion"]}>
        {name}: {price + " €"}
      </div>
      <div>
        {name} : {price / 2} €
      </div>
    </>
  );
}

export default Price;
