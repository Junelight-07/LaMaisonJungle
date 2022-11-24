import "../style.css";
import logo from "../assets/leaf.png";

function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

const plantList = [
  {
    name: "monstera",
    price: 10,
    category: "classique",
    id: "1ed",
    isBestSale: true,
  },
  {
    name: "ficus lyrata",
    price: 12,
    category: "classique",
    id: "2ab",
    isBestSale: false,
  },
  {
    name: "pothos argenté",
    price: 7,
    category: "classique",
    id: "3sd",
    isBestSale: true,
  },
  {
    name: "yucca",
    price: 6,
    category: "classique",
    id: "4kk",
    isBestSale: true,
  },
  {
    name: "olivier",
    price: 9,
    category: "extérieur",
    id: "5pl",
    isBestSale: false,
  },
  {
    name: "géranium",
    price: 14,
    category: "extérieur",
    id: "6uo",
    isBestSale: false,
  },
  {
    name: "basilique",
    price: 4,
    category: "extérieur",
    id: "7ie",
    isBestSale: false,
  },
  {
    name: "aloe",
    price: 18,
    category: "plante grasse",
    id: "8fp",
    isBestSale: false,
  },
  {
    name: "succulente",
    price: 10,
    category: "plante grasse",
    id: "9vn",
    isBestSale: true,
  },
];

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <>
      <h2 className="panier">Panier :</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map(({ name, price }, index) => (
          <li className="listeElement" key={`${name}-${index}`}>
            {name} : {price} ${name.isBestSale ? "" : <span>🔥</span>}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <Banner />
      <ShoppingList />
    </div>
  );
}

export default App;
