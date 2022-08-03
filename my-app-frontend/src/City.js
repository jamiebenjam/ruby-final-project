import React from "react";
import CityItems from "./CityItems";
import NewCityForm from "./NewCityForm";

function City({cities}) {

    const mapCities = cities.map((city) => {
        return <CityItems
        id={city.id}
        name={city.name}
        />
    })

    return (
        <div className="cityDiv">
            <NewCityForm />
            <p>City List</p>
            <ul>{mapCities}</ul>
        </div>
    )
}

export default City;