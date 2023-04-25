import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button, ProductCard } from "../components";
import { Product } from "../type";

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const navigate = useNavigate();
  React.useEffect(() => {
    setLoading(true);
    axios
      .get<Product>(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {loading ? (
        <div>Please wait</div>
      ) : product ? (
        <ProductCard product={product} fullItem={true} />
      ) : (
        <div>Product not found</div>
      )}
      <Button onClick={() => navigate("/product")}>Вернуться на главную</Button>
    </div>
  );
};
