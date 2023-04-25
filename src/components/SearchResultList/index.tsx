import React from "react";
import { SearchResult } from "../../type";
import { ProductCard } from "../ProductCard";
import styles from "./SearchResultList.module.scss";

export const SearchResultList: React.FC<SearchResult> = ({
  category,
  products,
}) => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );
  const changeCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };
  return (
    <>
      {products.length > 0 && (
        <div className={styles.wrapper}>
          <ul className={styles.categoryWrapper}>
            {category &&
              Object.entries(category).map(([title, val]) => (
                <li
                  onClick={() => changeCategory(title)}
                  key={title}
                  className={`${styles.item} ${
                    activeCategory === title ? styles.active : ""
                  }`}
                >
                  {title}
                  <div className={styles.circle}>{val}</div>
                </li>
              ))}
          </ul>
          <div className={styles.productWrapper}>
            {products
              .filter(
                (obj) =>
                  obj.category === activeCategory || activeCategory === null
              )
              .map((obj) => (
                <ProductCard
                  key={obj.id}
                  product={obj}
                  link={`/product/${obj.id}`}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};
