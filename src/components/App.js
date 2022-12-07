import { useState } from "react";
import Banner from "./Header/Banner";
import ShoppingList from "./ShoppingList/ShoppingList";
import Cart from "./cart/Cart";
import QuestionForm from "./QuestionForm";
import "./main.scss";

function App() {
  const [selectedPlant, setSelectedPlant] = useState();
  function handleClickPlant(plant) {
    setSelectedPlant(plant);
    // console.log(`Vous voulez acheter 1 ${plant.name} ? Très bon choix 🌱✨`);
  }

  return (
    <>
      <Banner />
      <div className="page">
        <Cart selectedPlant={selectedPlant} />
        <ShoppingList onClick={handleClickPlant} />
      </div>
      <QuestionForm />
    </>
  );
}

export default App;
