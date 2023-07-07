import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
