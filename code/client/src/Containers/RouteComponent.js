import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import ForgotPassword from './ForgotPassword/ForgotPassword.js';
import Header from '../components/Header/Header.js';
import Dashboard from './Dashboard/Dashboard.js';
import Journal from './Journal/Journal.js';
import UserProfile from './UserProfile/UserProfile.js';
import Events from './Events/Events.js';
import Weather from './Weather/Weather.js'
import Loader from './../components/Loader/Loader.js'
import {ProtectedRoute} from './ProtectedRoute.js';
import PopUpForm from './Activity/PopUpForm.js';
import AdminComponent from './Admin/Admin.js';
import AdminEvents from './Admin/AdminEvents.js';
import AdminDashboard from './Admin/AdminDashboard.js';
import AdminProfile from './UserProfile/AdminProfile.js'


//addding ProtectedRoute to enable only after login
const RoutesComponent = (props) => {
  return (
    <Router>
      <Routes>
        <Route element = {<Header/>}>
        <Route path="/" element = {<ProtectedRoute/>}>
          <Route path="/" element = {<Dashboard/> }/>
          </Route>
        <Route path="/journal" element = {<ProtectedRoute/>}>
          <Route path="/journal" element = {<Journal/>} />
        </Route>
        <Route path="/events" element = {<ProtectedRoute/>}>
          <Route path="/events" element = {<Events/>} />
        </Route>
        <Route path="/weather" element = {<ProtectedRoute/>}>
          <Route path="/weather" element = {<Weather/>} />
        </Route>
        <Route path="/loader" element = {<ProtectedRoute/>}>
          <Route path="/loader" element = {<Loader/>} />
        </Route>
          <Route path="/profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          </Route>
          <Route path="/form" element = {<PopUpForm/>} />
          
        <Route path="/login" element = {<Login/>} />
        <Route path="/Adminprofile" element = {<AdminProfile/>} />
        <Route path="/admin/users" element={<AdminComponent />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/forgot-password" element = {<ForgotPassword/>} />
      </Routes>
  </Router>
  )
}

export default RoutesComponent;