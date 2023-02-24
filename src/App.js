import NavigationBar from './components/NavigationBar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from './container/Login/Login';
import Landing from './pages/Landing';
import FuelHistory from './pages/FuelHistory';
import Register from './pages/Register';
import Userfront from "@userfront/react";

Userfront.init("demo1234");

function App() {
  return (
 <>
<Router>
<NavigationBar/>
<Routes>
        <Route exact path='/Landing' element={<Landing />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/FuelHistory' element={<FuelHistory/>} />
        {/* Replace the Dashboard with the user profile */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }      
            />
    </Routes>
</Router>
 </>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

{/* Delete if replaced with user profile */}
function Dashboard() {
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
}
export default App;
