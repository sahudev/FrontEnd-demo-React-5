import { useState } from "react";
// import Products from "./components/Products";
// import Cart from "./Cart";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./styles.css";
import CartContext from "./contexts/CartContext";
import { Switch, Route } from "react-router-dom";
// Note: Cart will contain below fields
// product-id, title, quantity, price

export default function App() {
  const [cart, setCart] = useState({});

  console.log("App");
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      return;
    }
    if (newCart[product.id].quantity === 1) {
      delete newCart[product.id];
    } else {
      newCart[product.id].quantity -= 1;
    }
    setCart(newCart);
  }
  // return (
  //   <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
  //     <div className="App">
  //       <Cart cart={cart} />
  //       <Products />
  //     </div>
  //   </CartContext.Provider>
  // );

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <Switch>
        <Route exact={true} path="/" component={ProductPage} />
        <Route exact={true} path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </CartContext.Provider>
  );
}
