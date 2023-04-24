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
    <div>
      <QuickSearch setSearch={setSearch} search={search} />
      {product &&
        product.map((obj) => (
          <Link to={`/product/${obj.id}`} key={obj.id}>
            <ProductCard product={obj} />
          </Link>
        ))}
    </div>
  );
};
