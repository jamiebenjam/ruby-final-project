import './App.css';
import Header from './Header';
import Home from './Home';
import CityItems from './CityItems';
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from 'react';

console.log('hi')

function App() {

  const [cities, setCities] = useState([])

  function fetchCities() {
    fetch("http://localhost:9292/cities")
    .then(response => response.json())
    .then(cityData => setCities(cityData))
  }

  useEffect(fetchCities, []);

  return (
    <div className="App">
      <Header />

      <Switch />

        <Route exact path="/"/>
          <Home cities={cities} />
        <Route />

        <Route exact path="/cities"/>
          <CityItems />
        <Route />

      <Switch />
    </div>
  );
}

export default App;
