import "./Search.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://www.themealdb.com/api/json/v1/1/filter.php";

export default function Search({ setSearchIng }) {
  const [error, setError] = useState(null);
  function grabSearch(e) {
    e.preventDefault();
    const ingredient = e.target.ingredient.value;
    setError(null);

    axios
      .get(`${baseURL}?i=${ingredient}`)
      .then((data) => {
        setSearchIng(data.data.meals);
        console.log(data.data);
        //setSearchIng(data.data);
      })
      .catch(({ response }) => {
        setError(`Error! ${response.data}`);
      });
  }

  return (
    <section className="search">
      <article className="sbar">
        <div className="sbar__text">
          <p className="sbar__text-title">Enter Ingredients You Have:</p>
        </div>
        <div className="sbar__form-box">
          <form className="sbar-form" onSubmit={grabSearch}>
            <input
              type="text"
              className="sbar__form-text"
              name="ingredient"
              placeholder="Enter Ingredient"
            />
            <button type="submit" className="sbar__form-button">
              Search
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
