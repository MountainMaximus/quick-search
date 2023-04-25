import React from "react";
import { useNavigate } from "react-router-dom";

import { Product } from "../../type";
import styles from "./ProductCard.module.scss";
interface IProductCard {
  product: Product;
  link?: string;
  fullItem?: boolean;
}
export const ProductCard: React.FC<IProductCard> = ({
  product,
  link,
  fullItem,
}) => {
  const navigate = useNavigate();

  const onClickItem = () => {
    if (link) navigate(link);
  };
  return (
    <div
      onClick={onClickItem}
      className={styles.item}
      style={fullItem ? { width: "100%" } : { width: "24%" }}
    >
      <div className={styles.img}>
        <img src={product.image} alt="Product" />
      </div>
      <div className={styles.title}>{product.title}</div>
    </div>
  );
};
