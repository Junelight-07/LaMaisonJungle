// import { plantList } from "../../data/PlantList";
// import PlantCard from "../ShoppingList/PlantCard/PlantCard";

// export default function Categories(props) {
//   const { activeCategory, addPlant } = props;
//   plantList.map((plant, category) =>
//     !activeCategory || activeCategory === category ? (
//       <PlantCard key={plant.name} plant={plant} onClick={addPlant} />
//     ) : (
//       <div>"hello"</div>
//     )
//   );
// }
import styles from "./Categories.module.scss";

export default function Categories(props) {
  const { categories, activeCategory, setActiveCategory } = props;
  return (
    <>
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className={styles["cat-list"]}
      >
        <option value="">Toutes les catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </>
  );
}
