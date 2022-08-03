import React from "react";
import CityItems from "./CityItems";
import NewCityForm from "./NewCityForm";
import ActivityItems from "./ActivityItems";

function City({cities, activities}) {

    const mapCities = cities.map((city) => {
        return <CityItems
        id={city.id}
        name={city.name}
        />
    })


    const mapActivities = activities.map((activity) => {
        return <ActivityItems
        id={activity.id}
        museum={activity.museum}
        restaurant={activity.restaurant}
        park={activity.park}
        misc={activity.misc}
        />
    })

    return (
        <div className="cityDiv">
            <NewCityForm />
            <ul>{mapCities}</ul>
            <ul>{mapActivities}</ul>
        </div>
    )
}

export default City;