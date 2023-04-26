import Banner from "./Header/Banner";
import ShoppingList from "./ShoppingList/ShoppingList";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import "./main.scss";
import { useState, useEffect } from "react";

export default function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Banner />
      <div className="page">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
}
