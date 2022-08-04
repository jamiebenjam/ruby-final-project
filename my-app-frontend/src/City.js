import React from "react";
import CityItems from "./CityItems";
import NewCityForm from "./NewCityForm";

function City({cities, activities, onAddCity}) {


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
            <NewCityForm onAddCity={onAddCity} />
            <ul>{mapCities}</ul>
        </div>
    )
}

export default City;