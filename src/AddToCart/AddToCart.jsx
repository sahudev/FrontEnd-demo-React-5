import React from "react";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";

function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  console.log("add to cart", product.id);
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;

  function increment() {
    increaseQuantity(product);
  }

  function decrement() {
    decreaseQuantity(product);
  }

  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}> Add To Cart </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrement}> - </button>
        <span>{quantity}</span>
        <button onClick={increment}> + </button>
      </div>
    );
  }
}
export default AddToCart;
