import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { useState } from "react";
export default function HomePage() {
  const [SearchIng, setSearchIng] = useState([]);
  const [Recipe, setRecipe] = useState([]);
  return (
    <>
      <Card SearchIng={SearchIng} />
      <Search setSearchIng={setSearchIng} setRecipe={setRecipe} />
    </>
  );
}
