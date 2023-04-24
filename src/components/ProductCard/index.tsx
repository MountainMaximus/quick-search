import React from "react";
import { Product } from "../../type";
import styles from "./ProductCard.module.scss";
interface IProductCard {
  product: Product;
}
export const ProductCard: React.FC<IProductCard> = ({ product }) => {
  return (
    <>
      <div>{product.title}</div>
      <img
        style={{ width: 300, height: "auto" }}
        src={product.image}
        alt="Product"
      />
    </>
  );
};
