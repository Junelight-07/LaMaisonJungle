import styles from "./Footer.module.scss";
import { useState } from "react";

function Footer() {
  const [inputValue, setInputValue] = useState("alexy@gmail.com");

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }

  return (
    <footer className={styles["Footer"]}>
      <div className={styles["Footer-elem"]}>
        {"Pour les passionné·e·s de plantes 🌿🌱🌵"}
      </div>

      <div className={styles["Footer-elem"]}>{"Laissez-nous votre mail :"}</div>
      <input
        placeholder={"alexy@gmail.com"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
