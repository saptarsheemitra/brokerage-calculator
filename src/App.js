import { BrowserRouter as Router, Link, Switch, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar/Nav";
import Test from "./Components/Navbar/testnav"
 function App() {
   return (
     <div>
       {/* <Test/> */}
       <Nav/>
       <Home/>
       {/* <Router>
        <Nav/>
        <Switch>
        <Route exact path="/ed-zerodha" component={Home} />
        </Switch>
       </Router> */}
     </div>
  );
}

export default App;
