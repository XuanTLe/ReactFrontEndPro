import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CustomNavbar} from "./components/CustomNavbar";
import {SignIn} from "./components/SignIn";
import {SignUp} from "./components/SignUp";
import {RestaurantsList} from "./components/RestaurantsList";
import {Home} from "./components/Home";
import {AccountReviews} from "./components/AccountReviews";

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
        <div className={"ContentMain"}>
          <BrowserRouter>
              <Switch>
                  <Route path={"/restaurants"} component={RestaurantsList}/>
                  <Route path={"/signup"} component={SignUp}/>
                  <Route path={"/signin"} component={SignIn}/>
                  <Route path={"/myreviews"} component={AccountReviews}/>
                  <Route path={"/"} component={Home}/>
              </Switch>
          </BrowserRouter>
        </div>

    </div>
  );
}

export default App;
