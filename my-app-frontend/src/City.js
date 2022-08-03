import React from "react";
import CityItems from "./CityItems";
import NewCityForm from "./NewCityForm";
import ActivityItems from "./ActivityItems";

function City({cities, activities}) {
    // console.log('activities', activities)

    const mapCities = cities.map((city) => {
        return <CityItems
        key={city.id}
        id={city.id}
        activities={filterActivities(city)}
        name={city.name}
        />
    })

    function filterActivities(city) {
        return activities.filter((activity) => activity.city_id === city.id)
    }

    return (
        <div className="cityDiv">
            <NewCityForm />
            <ul>{mapCities}</ul>
            <ul>{mapActivities}</ul>
        </div>
    )
}

export default City;