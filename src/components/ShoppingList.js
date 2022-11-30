import { plantList } from "../Datas/PlantList";
import PlantItem from "./PlantItem";

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
        {plantList.map(
          (
            {
              name,
              price,
              id,
              isBestSale,
              isSpecialOffer,
              light,
              water,
              cover,
            },
            index
          ) => (
            <>
              <li className="listeElement" key={`${name}-${index}`}>
                <div>
                  <div>
                    {name} : {price} €
                  </div>
                  <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                  />
                  {isBestSale && <span> Meilleure vente 🔥</span>}
                </div>
                {isSpecialOffer && (
                  <div>
                    <div className="lmj-sales">Promotion en cours</div>
                    <div>
                      {name} : {price / 2} €
                    </div>
                  </div>
                )}
              </li>
            </>
          )
        )}
      </ul>
    </div>
  );
}

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

export default ShoppingList;
