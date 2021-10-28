import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Componants/Header/Header';
import Login from './Componants/LogIn/Login';
import AuthProvider from './Context/AuthProvider';
import Signup from './Componants/SignUp/Signup';
import Home from './Componants/Home/Home';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Router path="/home">
              <Home></Home>
            </Router>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
