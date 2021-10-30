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
import Footer from './Componants/Footer/Footer';
import PageNotFound from './Componants/PageNotFound/PageNotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import OrderDetails from './Componants/Pages/OrderDetails/OrderDetails';
import MyOrders from './Componants/Pages/MyOrders/MyOrders';
import ManageOrders from './Componants/Pages/ManageOrders/ManageOrders';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/details/:detailsId">
              <OrderDetails></OrderDetails>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
