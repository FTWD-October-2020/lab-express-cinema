import React, { Component } from "react";
import Home from "./components/Home";
import MovieDetail from './components/MovieDetail'
import { Link, Route, Switch } from "react-router-dom"
import CreateNewMovie from "./components/CreateNewMovie"
import EditMovie from "./components/EditMovie"

class App extends Component {
  render() {
    return (
      <div className="App">



        <Switch>
          <Route exact path='/movies' render={(props) => <Home {...props} />} />
          <Route exact path='/movies/create' render={(props) => <CreateNewMovie {...props} />} />
          <Route exact path='/movies/detail/:movieId' render={(props) => <MovieDetail {...props} />} />
          <Route exact path='/movies/edit/:movieId' render={(props) => <EditMovie {...props} />} />
        </Switch>
      </div>


    );
  }
}

export default App;
