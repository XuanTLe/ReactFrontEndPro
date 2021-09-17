import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CustomNavbar} from "./components/CustomNavbar";
import {SignIn} from "./components/SignIn";
import {SignUp} from "./components/SignUp";
import {RestaurantsList} from "./components/RestaurantsList";
import {Home} from "./components/Home";

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <header className="App-header">
          <BrowserRouter>
              <Switch>
                  <Route path={"/restaurants"} component={RestaurantsList}/>
                  <Route path={"/signup"} component={SignUp}/>
                  <Route path={"/signin"} component={SignIn}/>
                  <Route path={"/home"} component={Home}/>
              </Switch>
          </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
