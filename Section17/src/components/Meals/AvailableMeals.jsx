import { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState();
  const [loading, setLoading] = useState(true);

  const fetchMeals = useCallback(async () => {
    fetch("https://reacthttp-82415-default-rtdb.firebaseio.com/Meals.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data = Object.values(data);
        const mealsList = data.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        });
        setMealsList(mealsList);
        setLoading(false);
      })
      .catch((error) => alert(error));
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <section className={classes.meals}>
      <Card>{loading ? <p>Loading...</p> : <ul>{mealsList}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
