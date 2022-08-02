import './App.css';
import Header from './Header';
import NewYork from './NewYork';
import Home from './Home';
import { Route, Switch } from "react-router-dom";

function App() {

  

  return (
    <div className="App">
      <Header />

      <Switch />

        <Route exact path="/"/>
          <Home />
        <Route />

        <Route path="/NewYork"/>
          <NewYork />
        <Route />

      <Switch />
    </div>
  );
}

export default App;
