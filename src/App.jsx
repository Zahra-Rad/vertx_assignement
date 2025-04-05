import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import AnalyticsPage from "./pages/AnalyticsPage";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  {
    path: "/analytics",
    element: <AnalyticsPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/analytics" replace />} />
        <Route element={<DashboardLayout />}>
          {routes.map(route => (
            <Route 
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
