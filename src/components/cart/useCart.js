import { useState } from "react";

export default function useCart() {
  const [plants, setPlants] = useState([]);

  function addPlant(plant) {
    setPlants((curr) => [...curr, plant]);
  }

  function getTotalPlants() {
    let total = 0;
    for (let index = 0; index < plants.length; index++) {
      total += plants[index].price;
    }

    if (!plants.length) return <li>Votre panier est vide</li>;
    return <li> Total : {total} € </li>;
  }

  return {
    plants,
    addPlant,
    getTotalPlants,
  };
}
