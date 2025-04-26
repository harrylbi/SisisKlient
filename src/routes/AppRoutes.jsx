import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightSearch from "../pages/FlightSearch/FlightSearch";
import FlightResult from "../pages/FlightSearch/FlightResult";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FlightSearch />} />
      <Route path="/hasil" element={<FlightResult />} />
    </Routes>
  </Router>
);

export default AppRoutes;
