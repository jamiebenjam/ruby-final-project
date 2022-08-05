import React, {useEffect, useState} from "react";
import CityItem from "./CityItem";
import NewCityForm from "./NewCityForm";
import ArchivedTrips from "./ArchivedTrips";

function City() {
    
    const [cities, setCities] = useState([])
    const [activities, setActivities] = useState([])

  //FETCH
function fetchCities() {
    fetch("http://localhost:9292/cities")
    .then(response => response.json())
    .then(cityData => setCities(cityData))
}

useEffect(fetchCities, []);

function fetchActivities() {
    fetch("http://localhost:9292/activities")
    .then(response => response.json())
    .then(activityData => setActivities(activityData))
}

useEffect(fetchActivities, []);
    const mapCities = cities.map((city) => {
        return <CityItem
        key={city.id}
        id={city.id}
        activities={filterActivities(city)}
        name={city.name}
        onDeleteCity={onDeleteCity}
        city={city}
        onDeleteActivity={onDeleteActivity}
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

    const mapActivities = activities.map((activity) => {
        return <ArchivedTrips
        activities={activities}
        />
})


    return (
        <div className="cityDiv">
            <NewCityForm cities={cities} onAddCity={onAddCity} setCities={setCities} onAddActivity={onAddActivity} />
            <ul>{mapCities}</ul>
            <h2>Past Trips</h2>
        </div>
    )
}

export default City;