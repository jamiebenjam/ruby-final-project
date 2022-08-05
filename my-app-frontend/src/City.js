import React, {useEffect, useState} from "react";
import CityItem from "./CityItem";
import NewCityForm from "./NewCityForm";

function City({fetchArchives, fetchActivities, activities, setActivities}) {
    
  const [cities, setCities] = useState([])

  function fetchCities() {
    fetch("http://localhost:9292/cities")
    .then(response => response.json())
    .then(cityData => setCities(cityData))
  }
  
  useEffect(fetchCities, []);

    const mapCities = cities.map((city) => {
        return <CityItem
        key={city.id}
        id={city.id}
        activities={filterActivities(city)}
        name={city.name}
        onDeleteCity={onDeleteCity}
        city={city}
        onDeleteActivity={onDeleteActivity}
        fetchArchives={fetchArchives} 
        fetchActivities={fetchActivities}
        />
    })
 
    // for POST
    const onAddCity = ((newCity) => {
      setCities((prevCities) => [...prevCities, newCity])
    })
  
    const onAddActivity = ((newActivity) => {
      setActivities((prevActivites) => [...prevActivites, newActivity])
    })

    // for DELETE
    function onDeleteCity(deletedCity) {
      const updatedCities = cities.filter((city) => city.id !== deletedCity.id);
      setCities(updatedCities);
    }

    function onDeleteActivity(deletedActivity) {
      const updatedActivities = activities.filter((activity) => activity.id !== deletedActivity.id);
      setActivities(updatedActivities);
    }

    //attach activities to cities
    function filterActivities(city) {
        return activities.filter((activity) => activity.city_id === city.id)
    }


    return (
        <div className="cityDiv">
            <NewCityForm cities={cities} onAddCity={onAddCity} setCities={setCities} onAddActivity={onAddActivity} />
            <ul>{mapCities}</ul>
        </div>
    )
}

export default City;