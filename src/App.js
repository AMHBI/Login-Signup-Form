import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  
  return <div className='App'>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Redirect from="/" to="/login" />
    </Switch>
      
    </div>;
}

export default App;
