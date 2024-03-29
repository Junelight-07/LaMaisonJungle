import "../style.css";
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
    name: "Monstera",
    price: 10,
    category: "Classique",
    id: "1ed",
    isBestSale: true,
  },
  {
    name: "Ficus lyrata",
    price: 12,
    category: "Classique",
    id: "2ab",
    isBestSale: false,
  },
  {
    name: "Pothos argenté",
    price: 7,
    category: "Classique",
    id: "3sd",
    isBestSale: true,
  },
  {
    name: "Yucca",
    price: 6,
    category: "Classique",
    id: "4kk",
    isBestSale: true,
  },
  {
    name: "Olivier",
    price: 9,
    category: "Extérieur",
    id: "5pl",
    isBestSale: false,
  },
  {
    name: "Géranium",
    price: 14,
    category: "Extérieur",
    id: "6uo",
    isBestSale: false,
  },
  {
    name: "Basilique",
    price: 4,
    category: "Extérieur",
    id: "7ie",
    isBestSale: false,
  },
  {
    name: "Aloe",
    price: 18,
    category: "Plante grasse",
    id: "8fp",
    isBestSale: false,
  },
  {
    name: "Succulente",
    price: 10,
    category: "Plante grasse",
    id: "9vn",
    isBestSale: true,
  },
];

// function ShoppingList() {
//   const categories = plantList.reduce(
//     (acc, plant) =>
//       acc.includes(plant.category) ? acc : acc.concat(plant.category),
//     []
//   );
//   return (
//     <>
//       <h2 className="panier">Panier :</h2>
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat}>{cat}</li>
//         ))}
//       </ul>
//       <ul>
//         {plantList.map(({ name, price }, index) => (
//           <li className="listeElement" key={`${name}-${index}`}>
//             {name} : {price} ${name.isBestSale ? "" : <span>🔥</span>}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div className="contenuPage">
      <h2 className="panier">Panier :</h2>
      <ul className="cat-list">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="plant-list">
        {plantList.map(({ name, price, isBestSale, isSpecialOffer }, index) => (
          <>
            <li className="listeElement" key={`${name}-${index}`}>
              <div>
                <div>
                  {name} : {price} €
                </div>
                <div>{isBestSale && <span> Meilleure vente 🔥</span>}</div>
              </div>
              <div>
                {isSpecialOffer && (
                  <div>
                    <div className="lmj-sales">Promotion en cours</div>
                  </div>
                )}
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
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
