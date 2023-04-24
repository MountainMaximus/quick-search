import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../components";
import { Product } from "../type";

export const ProductListPage: React.FC = () => {
  const [product, setProduct] = React.useState<Product[] | null>(null);
  React.useEffect(() => {
    axios
      .get<Product[]>(`https://fakestoreapi.com/products?limit=100`)
      .then((res) => setProduct(res.data));
  }, []);
  console.log(product);

  return <div></div>;
};
