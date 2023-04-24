import React from "react";
import styles from "./QuickSearch.module.scss";
interface IQuickSearch {
  setSearch: (val: string) => void;
  search: string;
}
export const QuickSearch: React.FC<IQuickSearch> = ({ setSearch, search }) => {
  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};
