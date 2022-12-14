import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem/MealItem";

const AvailableMeal = () => {
  
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
