// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Login from "./components/login";
import Home from "./components/home";
import Pricing from "./components/pricing";
import CreatePort from "./components/createport";
import ViewPort from "./components/viewport";
import Signup from "./components/signup";
import { PortfolioProvider } from "./portfolioContext";
import ListPortfolio from "./components/listPortfolio";
//import Footer from "./components/footer";
import ManagePortfolio from "./components/manage";

function App() {
  return (
    <div>
      <Router>
        <PortfolioProvider>
          <Header></Header>
          {/* <Home></Home> 
           <Pricing></Pricing>
          <Faq></Faq>
          <Login></Login> */}

          <Route component={Home} path={"/home"}></Route>
          {/* <Route component={Pricing} path={'/pricing'}></Route>  */}
          {/* <Pricing></Pricing> */}

          <Route component={Signup} path={"/signup"}></Route>
          <Route component={Login} path={"/login"}></Route>
          <Route component={CreatePort} path={"/createport"}></Route>
          <Route component={ViewPort} path={"/viewportfolio/:id"}></Route>
          <Route component={ListPortfolio} path={"/listportfolio"}></Route>
          <Route component={ManagePortfolio} path={"/manage"}></Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          {/* <Footer></Footer> */}
        </PortfolioProvider>
      </Router>
    </div>
  );
}

export default App;
