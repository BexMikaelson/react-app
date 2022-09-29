import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import People from "./components/People";
import Films from "./components/Films";
import Home from "./components/Home";
import "./index.css";


function App() {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [loding, setLoding] =useState(true);

  useEffect(()=>{
    async function fetchPeople(){
      let res = await fetch( "https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchFilms(){
      let res = await fetch( "https://swapi.dev/api/films/?format=json");
      let data = await res.json();
      setFilms(data.results);
    }

    fetchPeople();
    fetchFilms();

  },[])

  //console.log('data', people)
  //console.log('data', films)
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>

            </Route>
            <Route path="/people">
              <People/>

            </Route>
            <Route path="/films">
              <Films/>

            </Route>
          </Switch>

        </div>
      
      </div>
    </Router>
    
  );
}

export default App;
