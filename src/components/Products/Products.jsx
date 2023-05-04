import { useState } from "react";
import { useEffect, memo } from "react";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
// const globalProducts = [
//   {
//     title: "Apple New Tab",
//     price: "Rs 50,000"
//   },
//   {
//     title: "Amazon New Tab",
//     price: "Rs 35,000"
//   },
//   {
//     title: "Google New Tab",
//     price: "Rs 40,000"
//   },
//   {
//     title: "LG New Tab",
//     price: "Rs 30,000"
//   },
//   {
//     title: "Dell New Tab",
//     price: "Rs 45,000"
//   },
//   {
//     title: "Dell Tab",
//     price: "Rs 41,000"
//   }
// ];

// function getProductApi(callback) {
//   // console.log("call started");
//   setTimeout(function () {
//     callback(globalProducts);
//     //console.log("Finished");
//   }, 3000);
// }
// export default function Products() {
//   //let isLoading = true;
//   let [isLoading, setIsLoading] = useState(true);
//   // let products = [];
//   let [products, setProducts] = useState([]);

//   useEffect(
//     function () {
//       getProductApi(function () {
//         console.log("started");
//         console.log(globalProducts);

//         // products = globalProducts;
//         setProducts(globalProducts);
//         //isLoading = false;
//         setIsLoading(false);
//       });
//     },
//     [isLoading, products]
//   );
function Products() {
  // let isLoading = true;
  // useState(default value)
  // [stateVar, setterfunction]
  let [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);

  // let a =  useState(true);
  // let isLoading = a[0];
  // let setIsLoading = a[1];
  useEffect(function () {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
        // isLoading = false;
        // rerender()
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  if (isLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <div>
        {/* {products.map(function (product) {
          //console.log("Last leg");
          return <ProductCard title={product.title} price={product.price} />;
        })} */}
        <Link to="/cart"> Cart </Link>
        {products.map(function (product) {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default memo(Products);
