import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import withAuthentication from "./hocs/withAuthentication";
import Users from "./pages/Users";
import { withDataFetching } from "./hocs/withDataFetching";

const ProfileWithAuthentication = withAuthentication(Profile);
const UsersWithAuthAndDataFetching = withAuthentication(
  withDataFetching(Users, "https://jsonplaceholder.typicode.com/users")
);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<ProfileWithAuthentication />} />
          <Route path='/users' element={<UsersWithAuthAndDataFetching />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
