import logo from "../../assets/leaf.png";
import styles from "./Banner.module.scss";

function Banner() {
  const title = "La maison jungle";
  return (
    <header className={styles["header"]}>
      <div className={styles["brand"]}>
        <img
          src={logo}
          alt="La maison jungle"
          className={styles["brand--logo"]}
        />
        <h1 className={styles["brand--title"]}>{title}</h1>
      </div>
      <Recommendation />
    </header>
  );
}

function Recommendation() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 4; //mars à mai
  const isSummer = currentMonth >= 5 && currentMonth <= 7; //juin à août
  const isFall = currentMonth >= 8 && currentMonth <= 10; //septembre à novembre
  const isWinter = currentMonth >= 11 || currentMonth <= 1; // décembre à février

  if (isSpring) {
    return (
      <div className={styles["recommendation"]}>
        C'est le printemps, il est temps de rempoter !
      </div>
    );
  }
  if (isSummer) {
    return (
      <div className={styles["recommendation"]}>
        Préparez-vous à la récolte !
      </div>
    );
  }
  if (isFall) {
    return (
      <div className={styles["recommendation"]}>Le froid arrive attention</div>
    );
  }
  if (isWinter) {
    return (
      <div className={styles["recommendation"]}>
        Cachez bien vos plantes du froid
      </div>
    );
  }
}

export default Banner;
