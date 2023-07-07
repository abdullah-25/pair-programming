import "./Card.scss";
import CardItem from "../../components/CardItem/CardItem";

export default function Card({ SearchIng, setRecipe }) {
  console.log(SearchIng);
  if (SearchIng.length !== 0) {
    return (
      <>
        <div className="card">
          {SearchIng.slice(0, 3).map((meal) => (
            <CardItem
              id={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              setRecipe={setRecipe}
            />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="card">
      <div className="card__content">
        <img
          className="card__image"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        />
        <div className="card__title">Healthy</div>
      </div>
      <div className="card__content">
        <img
          className="card__image"
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=600"
        />
        <div className="card__title">Quick</div>
      </div>
      <div className="card__content">
        <img
          className="card__image"
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
        <div className="card__title">Meals</div>
      </div>
    </div>
  );
}
