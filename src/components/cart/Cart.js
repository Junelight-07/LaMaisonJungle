import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";

// function handleClick(plant) {
//   console.log(`Vous voulez acheter 1 ${plant.name} ? Très bon choix 🌱✨`);
//   var total = plant.name + " " + plant.price + "€";
//   console.log(total);
//   var test = (
//     <>
//       <p>Panier</p>
//       <p>{total}</p>
//       <p>
//         {plant.name} {plant.price} €
//       </p>
//     </>
//   );
// }

function Cart({ selectedPlant }) {
  const [selectedPlants, setSelectedPlants] = useState([]);

  useEffect(() => {
    if (selectedPlant) setSelectedPlants((curr) => [...curr, selectedPlant]);
  }, [selectedPlant]);

  function getTotal(plants) {
    let total = 0;
    for (let index = 0; index < plants.length; index++) {
      total += plants[index].price;
    }
    return <li> Total : {total} € </li>;
  }

  return (
    <div className={styles["Cart"]}>
      <>
        <div className={styles["Cart-panier"]}>Panier</div>
        <ul>
          {selectedPlants.map((plant) => (
            <li key={plant.name}>
              {plant.name} {plant.price} €
            </li>
          ))}
          {getTotal(selectedPlants)}
        </ul>
      </>
    </div>
  );
}

export default Cart;
