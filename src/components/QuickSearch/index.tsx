import React from "react";
import styles from "./QuickSearch.module.scss";
interface IQuickSearch {
  setSearch: (val: string) => void;
  search: string;
  children: React.ReactNode;
}
export const QuickSearch: React.FC<IQuickSearch> = ({
  setSearch,
  search,
  children,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <svg
            onClick={onClickClear}
            className={styles.clearIcon}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        )}
      </div>
      {children}
    </div>
  );
};
