import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import withAuthentication from "./hocs/withAuthentication";

const ProfileWithAuthentication = withAuthentication(Profile);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<ProfileWithAuthentication />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
