import React from "react";
import { Product } from "../../type";
import styles from "./SearchResultList.module.scss";
interface ISearchResultList {
  category: { title: string; count: number }[];
  products: Product[];
}
export const SearchResultList: React.FC<ISearchResultList> = ({
  category,
  products,
}) => {
  return (
    <>
      <div></div>
    </>
  );
};
