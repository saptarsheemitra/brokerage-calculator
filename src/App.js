import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar/Nav";
import ZerodhaED from "./Components/EquityDeliveryZerodha/EquityZerodha";
import GrowwED from "./Components/EquityDeliveryGroww/EquityGroww";
import UpstoxED from "./Components/EquityDeliveryUpstox/EquityUpstox";
import ZerodhaIntra from "./Components/IntradayZerodha/IntraZerodha";
import GrowwIntra from "./Components/IntradayGroww/IntraGroww";
import UpstoxIntra from "./Components/IntradayUpstox/IntraUpstox";

function App() {
  return (
    <Layout>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="zerodha-ed" element={<ZerodhaED />} />
          <Route path="groww-ed" element={<GrowwED />} />
          <Route path="upstox-ed" element={<UpstoxED />} />
          <Route path="zerodha-intra" element={<ZerodhaIntra />} />
          <Route path="groww-intra" element={<GrowwIntra />} />
          <Route path="upstox-intra" element={<UpstoxIntra />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
