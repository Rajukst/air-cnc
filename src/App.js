import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddService from "./WebPages/Admin/AdminPanel/AddService/AddService";
import Header from "./WebPages/Header-Section/Header/Header";
import Home from "./WebPages/Header-Section/Home/Home/Home";
import HomePage from "./WebPages/Header-Section/Home/HomePage/HomePage";
import Experience from "./WebPages/UsersCollection/Experience/Experience";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/experience">
            <Experience></Experience>
          </Route>
          <Route path="/add-service">
            <AddService></AddService>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
