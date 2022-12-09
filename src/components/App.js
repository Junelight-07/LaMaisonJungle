import Banner from "./Header/Banner";
import ShoppingList from "./ShoppingList/ShoppingList";
import Cart from "./Cart/Cart";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer/Footer";
import "./main.scss";

function App() {
  return (
    <>
      <Banner />
      <div className="page">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
      <QuestionForm />
    </>
  );
}

export default App;
