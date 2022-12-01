import "./main.scss";
import Banner from "./Header/Banner";
import ShoppingList from "./ShoppingList/ShoppingList";

function App() {
  return (
    <>
      <Banner />
      <div className="page">
        <ShoppingList />
      </div>
    </>
  );
}

export default App;
