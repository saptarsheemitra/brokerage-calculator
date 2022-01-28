import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar/Nav";
 function App() {
   return (
     <div>
       <Nav/>
       <Home/>
     </div>
  );
}

export default App;
