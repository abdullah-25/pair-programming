import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./RecipePage.scss";

const baseURL = "https://www.themealdb.com/api/json/v1/1/lookup.php";

export default function RecipePage() {
  const [recipe, setRecipe] = useState([]);

  const params = useParams();
  let { id } = params;
  console.log(id);
  useEffect(() => {
    axios.get(`${baseURL}?i=${id}`).then((data) => {
      console.log(data.data.meals[0]);
      setRecipe(data.data.meals[0]);
    });
  }, [id]);

  if (recipe.length === 0) {
    return <>loading....</>;
  }
  console.log(recipe);
  //let link = recipe.strYoutube.split("");
  return (
    <div className="recipe">
      <h1 className="recipe__title">{recipe.strMeal}</h1>

      <div></div>

      <div className="video-box">
        <iframe
          width="860"
          className="video-container__video"
          //height="315"
          src={`https://www.youtube.com/embed/${recipe.strYoutube.substr(
            //recipe.strYoutube.indexOf("="),
            32,
            recipe.strYoutube.length - 1
          )}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="recipe__subinfo">
        <div className="recipe__subinfo--Area">
          Recipe from: {recipe.strArea}
        </div>
        <div className="recipe__subinfo--category">
          Type: {recipe.strCategory}
        </div>
      </div>
      <div className="recipe_ingredient">
        <ul>
          <li> {recipe.strIngredient1}</li>
          <li> {recipe.strIngredient2}</li>
          <li> {recipe.strIngredient3}</li>
        </ul>
      </div>
      <p className="recipe__instructions">
        Instruction: {recipe.strInstructions}
      </p>
    </div>
  );
}
