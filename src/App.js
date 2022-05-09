import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar/Nav";
import Zerodha from "./Components/EquityDeliveryZerodha/EquityZerodha";
import Groww from "./Components/EquityDeliveryGroww/EquityGroww";
import Upstox from "./Components/EquityDeliveryUpstox/EquityUpstox";
function App() {
  return (
    <Layout>
      {/* <Test/> */}
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="zerodha-ed" element={<Zerodha />} />
          <Route path="groww-ed" element={<Groww />} />
          <Route path="upstox-ed" element={<Upstox />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
