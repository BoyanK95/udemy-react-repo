import { Fragment } from "react"
import AvailableMeal from "./AvailableMeals"
import MealSummary from "./MealsSummary"



const Meals = () => {
    return <Fragment>
        <MealSummary />
        <AvailableMeal />
    </Fragment>
}

export default Meals