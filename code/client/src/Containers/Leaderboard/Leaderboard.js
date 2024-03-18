import { Grid, Typography } from "@mui/material";
import { getLeaderboardIcons } from "../../Utils/LeaderboardUtils";
import Workspace from '@mui/icons-material/MilitaryTech';
import "./Leaderboard.scss";
import MiniLoader from "../../components/Loader/MiniLoader";
import React from "react";

const activityUnits = {
    cycling: 'Miles',
    running: 'Miles',
    lifting: 'Miles',
    playing: 'Hours',
    dancing: 'Hours', // Different unit for dancing
    // Add other activities and their units as needed
  };
  
  const getUnitForActivity = (activityId) => {
    const unit = activityUnits[activityId] || 'Miles'; // Default unit is 'Miles'
    console.log(`Activity ID: ${activityId}, Unit: ${unit}`);
    return unit;
  };

const Leaderboard = ({ loader, activities }) => {
    return (
        <Grid container alignItems={"center"} justifyContent={"center"} className="leaderboard-ext">
            {loader ? 
                <MiniLoader height={250} width={250}/> : 
                <React.Fragment>
                    <Grid item className="logo-container">
                        <Workspace color="primary" className="logo"/>
                    </Grid>
                    
                    <Grid display={"flex"} direction={"column"} className="leaderboard-main">
                        {activities.map((activity, index) => 
                            <Grid item container display={"flex"} direction={"row"} className="leaderboard-item" key={activity.id || index}>
                                <Grid item className="leaderboard-item-logo">
                                    {getLeaderboardIcons(activity.activityId)}
                                </Grid>
                                <Grid item display={"flex"} direction={"row"} className="leaderboard-item-info">
                                    <Grid item container justifyContent={'center'} alignItems={'center'}>
                                        <Typography 
                                            variant="h6" 
                                            fontWeight={"bolder"} 
                                            align="center"  
                                            color={"secondary"}
                                        >
                                            {`The highest you ${activity.action.toLowerCase()} is ${activity.value} ${getUnitForActivity(activity.activityId)}`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </React.Fragment>
            }
        </Grid>
    );
};

export default Leaderboard;