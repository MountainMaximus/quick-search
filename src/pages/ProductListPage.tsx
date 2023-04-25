import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { ProductCard, QuickSearch } from "../components";

import { Product } from "../type";

export const ProductListPage: React.FC = () => {
  const [product, setProduct] = React.useState<Product[] | null>(null);
  const [search, setSearch] = React.useState<string>("");
  React.useEffect(() => {
    axios
      .get<Product[]>(`https://fakestoreapi.com/products`)
      .then((res) => setProduct(res.data));
  }, []);
  console.log(search);

  return (
    <>
      <QuickSearch setSearch={setSearch} search={search} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {product &&
          product.map((obj) => (
            <ProductCard product={obj} link={`/product/${obj.id}`} />
          ))}
      </div>
    </>
  );
};
