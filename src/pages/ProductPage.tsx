import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button } from "../components";
import { Product } from "../type";

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product | null>(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get<Product>(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {product ? (
        <>
          <div>{product.title}</div>
          <img
            style={{ width: 300, height: "auto" }}
            src={product.image}
            alt="Product"
          />
        </>
      ) : (
        <div>Product not found</div>
      )}
      <Button onClick={() => navigate("/product")}>Вернуться на главную</Button>
    </div>
  );
};
