import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import City from './City';

function App() {

  const [cities, setCities] = useState([])
  const [activities, setActivities] = useState([])

  const onAddCity = ((newCity) => {
    setCities((prevCities) => [...prevCities, newCity])
  })

  const onAddActivity = ((newActivity) => {
    setActivities((prevActivites) => [...prevActivites, newActivity])
  })

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

  function onDeleteCity(deletedCity) {
    const updatedCities = cities.filter((city) => city.id !== deletedCity.id);
    setCities(updatedCities);
  }

  function onDeleteActivity(deletedActivity) {
    const updatedActivities = activities.filter((activity) => activity.id !== deletedActivity.id);
    setActivities(updatedActivities);
  }


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<City onDeleteActivity={onDeleteActivity} setCities={setCities} cities={cities} activities={activities} onAddCity={onAddCity} onAddActivity={onAddActivity} onDeleteCity={onDeleteCity} />} />
      </Routes>
    </div>
  );
}

export default App;
