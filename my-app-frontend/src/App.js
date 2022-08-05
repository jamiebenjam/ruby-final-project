import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import City from './City';
import { act } from 'react-dom/test-utils';
import ArchivedTrips from './ArchivedTrips';

function App() {

  const [archives, setArchives] = useState([])

function fetchArchives() {
  console.log("4")
  fetch("http://localhost:9292/archive")
  .then(response => {response.json()
  console.log("5")})
  .then(archiveData => {setArchives(archiveData)
  console.log(`app.js ${archiveData}`)})
}

useEffect(fetchArchives, [])


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<City setArchives={setArchives} fetchArchives={fetchArchives}/>} />
        <Route path="/archive" element={<ArchivedTrips archives={archives} setArchives={setArchives} fetchArchives={fetchArchives} />} />
      </Routes>
    </div>
  );
}

export default App;
