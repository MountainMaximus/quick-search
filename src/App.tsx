import { Routes, Route } from "react-router-dom";
import React from "react";
import { Wrapper } from "./layout/Wrapper";
import { ProductListPage, ProductPage, LoginPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
