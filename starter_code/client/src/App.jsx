import React, { Component } from "react";
import Home from "./components/Home";
import MovieDetail from './components/MovieDetail'
import {Link,Route,Switch} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        


        <Switch>
            <Route exact path='/movies' render={(props)=> <Home {...props}/>}/>
            <Route exact path='/movies/:movieId' render={(props)=> <MovieDetail {...props}/>}/>
        </Switch>
      </div>

      
    );
  }
}

export default App;
