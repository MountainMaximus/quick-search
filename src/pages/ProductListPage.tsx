import axios from "axios";
import React from "react";
import { ProductCard, QuickSearch, SearchResultList } from "../components";

import { Product, SearchResult } from "../type";

export const ProductListPage: React.FC = () => {
  const [product, setProduct] = React.useState<Product[] | null>(null);
  const [search, setSearch] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<SearchResult>({
    products: [],
  });
  React.useEffect(() => {
    axios
      .get<Product[]>(`https://fakestoreapi.com/products`)
      .then((res) => setProduct(res.data));
  }, []);
  React.useEffect(() => {
    if (search === "") setSearchResult({ products: [] });
    else {
      const category: Record<string, number> = {};
      const products = product?.filter((obj) => {
        if (obj.title.indexOf(search) !== -1) {
          const newCategory = category[obj.category as keyof typeof category];
          if (typeof newCategory === "number" && !isNaN(newCategory))
            category[obj.category as keyof typeof category] += 1;
          else category[obj.category as keyof typeof category] = 1;
          return true;
        }
        return false;
      });
      setSearchResult({ category, products: products || [] });
    }
  }, [search, product]);

  return (
    <>
      <QuickSearch setSearch={setSearch} search={search}>
        <SearchResultList {...searchResult} />
      </QuickSearch>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {product &&
          product.map((obj) => (
            <ProductCard
              key={obj.id}
              product={obj}
              link={`/product/${obj.id}`}
            />
          ))}
      </div>
    </>
  );
};
