import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://www.themealdb.com/api/json/v1/1/lookup.php";

export default function CardItem({ id, image, title }, setRecipe) {
  return (
    <Link to={`/recipes/${id}`} style={{ textDecoration: "none" }}>
      <div id={id} className="card__content">
        <img className="card__image" src={image} />
        <div className="card__title">{title}</div>
      </div>
    </Link>
  );
}
