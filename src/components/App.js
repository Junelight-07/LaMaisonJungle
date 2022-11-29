import "../style.css";
import logo from "../assets/leaf.png";

import logo from "../assets/leaf.png";

function Banner() {
  const title = "La maison jungle";
  return (
    <header>
      <div
        style={{
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div className="lmj-titrePage">
          <img src={logo} alt="La maison jungle" className="lmj-logo" />
          <h1 className="lmj-title">{title}</h1>
        </div>
        <Recommendation />
      </div>
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
      <div
        style={{
          display: "flex",
        }}
      >
        C'est le printemps, il est temps de rempoter !
      </div>
    );
  }
  if (isSummer) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        Préparez-vous à la récolte !
      </div>
    );
  }
  if (isFall) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        Le froid arrive attention
      </div>
    );
  }
  if (isWinter) {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        Cachez bien vos plantes du froid
      </div>
    );
  }
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
