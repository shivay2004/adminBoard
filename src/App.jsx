import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Analytics from "./pages/Analytics";
import Sales from "./pages/Sales";
import Profile from "./pages/Profile";
import Charts from "./pages/Charts";
import Widgets from "./pages/Widgets";
import Settings from "./pages/Settings";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="sales" element={<Sales />} />
          <Route path="profile" element={<Profile />} />
          <Route path="charts" element={<Charts />} />
          <Route path="widgets" element={<Widgets />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
