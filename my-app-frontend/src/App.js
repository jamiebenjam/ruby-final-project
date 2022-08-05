import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import City from './City';
import ArchivedTrips from './ArchivedTrips';

function App() {

  const [archives, setArchives] = useState([])
  const [activities, setActivities] = useState([])

//FETCH

function fetchActivities() {
  fetch("http://localhost:9292/activities")
  .then(response => response.json())
  .then(activityData => setActivities(activityData))
}

useEffect(fetchActivities, []);

function fetchArchives() {
  fetch("http://localhost:9292/archive")
  .then(response => response.json())
  .then(archiveData => setArchives(archiveData))
}

useEffect(fetchArchives, [])


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<City fetchArchives={fetchArchives} setActivities={setActivities} fetchActivities={fetchActivities} activities={activities} />} />
        <Route path="/archive" element={<ArchivedTrips fetchArchives={fetchArchives} fetchActivities={fetchActivities} archives={archives} />} />
      </Routes>
    </div>
  );
}

export default App;
