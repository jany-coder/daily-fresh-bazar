import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from './components/Admin/AddProducts';
import { Nav, Navbar } from 'react-bootstrap';
import Login from './components/Login/Login';
import Buy from './components/Buy/Buy';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
       
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Fresh Bazar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/addProducts">Admin</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/book">Order</Link></Nav.Link>
            <Nav.Link href="#">{loggedInUser.name}</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addProducts">
            <AddEvents />
          </Route>
          <Route path="/order">

          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRoute path="/book/:name">
              <Buy></Buy>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
