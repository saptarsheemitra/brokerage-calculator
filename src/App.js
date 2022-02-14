import { BrowserRouter as Router, Link, Switch, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout"
import Home from "./Pages/Home";
import Nav from "./Components/Navbar/Nav";
import Zerodha from "./Components/EquityDeliveryZerodha/EquityZerodha"
 function App() {
   return (
     <Layout>
       {/* <Test/> */}
       <Nav/>
       <Home/>
       {/* <Router>
        <Route path="/" element={<Zerodha/>} /> */}
        {/* <Route path="/new-meetup" element={<NewMeetupsPage />} /> */}
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
      {/* </Router> */}
      </Layout>
  );
}

export default App;
