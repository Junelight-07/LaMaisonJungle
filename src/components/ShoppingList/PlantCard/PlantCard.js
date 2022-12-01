import CareScale from "../CareScale/CareScale";
import Price from "./Price/Price";

function PlantCard({ plant }) {
  return (
    <li className="plant-item">
      <img
        className="plant-item-cover"
        src={plant.cover}
        alt={`${plant.name} cover`}
      />

      <Price {...plant} />
      <CareScale careType="water" scaleValue={plant.water} />
      <CareScale careType="light" scaleValue={plant.light} />
      {plant.isBestSale && (
        <span className="plant-item-best-sale"> Meilleure vente 🔥</span>
      )}
    </li>
  );
}

export default PlantCard;
