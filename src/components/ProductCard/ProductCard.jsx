import AddToCart from "../../AddToCart/AddToCart";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <p>{product.price.value}</p>
      <AddToCart product={product} />
    </div>
  );
}
