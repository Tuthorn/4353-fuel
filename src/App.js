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

  const Submit = (e) => {
    e.preventDefault();

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

    //Calculated total amount due = price * gallons;
    const calculatedTotalAmountDue = calculatedSuggestedPrice * gallonsRequested;

    setSuggestedPrice(calculatedSuggestedPrice.toFixed(2));
    setTotalAmountDue(calculatedTotalAmountDue.toFixed(2));
  };

//{/* Delete if replaced with user profile */}
//function Dashboard() {
  //const userData = JSON.stringify(Userfront.user, null, 2);
  //return (
  //  <div>
   //   <h2>Dashboard</h2>
   //   <pre>{userData}</pre>
   //   <button onClick={Userfront.logout}>Logout</button>
    //</div>
  //);
//}
export default App;
