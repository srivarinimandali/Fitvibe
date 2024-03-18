
import { Link, Outlet, useNavigate } from "react-router-dom";
import './Header.scss'
import AppLogo from "../../Assets/Images/husky.svg"
import { Button, IconButton, Typography } from "@mui/material";
import { logout } from "../../Store/Actions/LoginAction";
import { connect } from "react-redux";
import { useState } from "react";
import NotificationDialog from "../../Containers/NotificationDialog/NotificationDialog";
import EventNotificationContent from "../../Containers/NotificationDialog/EventNotificationContent";

const AdminHeader = (props) => {
  const navigate = useNavigate();
  const [openNotif, setOpenNotif] = useState(false);

  const signoutClick =async()=>{
    let res = await props.logout();
    if(res){
      navigate("/login");
    }
  }

  const onClickOfNotififcation=()=>{
    setOpenNotif(true);
  }

  const handleNotificationClose =()=>{
    setOpenNotif(false);
  }

  return (
    <div className="main-layout-container"> 
        <div className="header-wrapper">
          <div className="header-logo">
              <img alt="app-logo" src={AppLogo} />
              <Typography variant="h6" className="logo-text">FITVIBE</Typography>
          </div>
            <nav className="header-nav"> 
            <Typography color='secondary.light'><Link to="/admin">My DashBoard</Link></Typography>
                <Typography color='secondary.light'><Link to="/Adminprofile">Profile</Link></Typography>
                <Typography paddingRight={2} color='secondary.light'><Button  onClick={signoutClick} variant="outlined" size="small" className="signout-btn">Sign Out</Button></Typography>
            </nav>
        </div>
        <NotificationDialog open={openNotif} handleClose={handleNotificationClose} content={<EventNotificationContent/>}/>
        <Outlet/>
    </div> 
  )
  
}

const mapDispatchToProps = (dispatch) => {
  return {
      logout : () => dispatch(logout()),
  }
}

export default connect(null, mapDispatchToProps)(AdminHeader);
