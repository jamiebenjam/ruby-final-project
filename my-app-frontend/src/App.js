import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from 'react';


function App() {

  const [cities, setCities] = useState([])
  const [activities, setActivities] = useState([])

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


  return (
    <div className="App">
      <Header />

      <Switch />

        <Route exact path="/"/>
          <Home cities={cities} activities={activities} />
        <Route />

        {/* <Route exact path="/cities"/>
          <CityItems />
        <Route />

        <Route exact path="/activities"/>
          <ActivityItems />
        <Route /> */}

      <Switch />
    </div>
  );
}

export default App;
