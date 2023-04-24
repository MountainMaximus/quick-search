import { Routes, Route } from "react-router-dom";
import React from "react";
import { Wrapper } from "./layout/Wrapper";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
