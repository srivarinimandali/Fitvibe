import badminton from '../Assets/Images/Badminton.gif';
import basketball from '../Assets/Images/Basketball.gif';
import cycling from '../Assets/Images/Cycling.gif';
import dancing from '../Assets/Images/Dancing.gif';
import food from '../Assets/Images/food.gif';
import hiking from '../Assets/Images/Hiking.gif';
import running from '../Assets/Images/Running.gif';
import sleep from '../Assets/Images/sleeping.gif';
import strength from '../Assets/Images/Strength.gif';
import swimming from '../Assets/Images/swimming.gif';
import walking from '../Assets/Images/walking.gif';
import water from '../Assets/Images/Water_Activity.gif';
import yoga from '../Assets/Images/Yoga.gif';


export const getActivityLogo= (activityId) =>{
    switch (activityId) {
        case 1: return badminton;
        case 2: return basketball;
        case 3: return cycling;
        case 4: return dancing;
        case 5: return food;
        case 6: return hiking;
        case 7: return running;
        case 8: return sleep;
        case 9: return strength;
        case 10: return swimming;
        case 11: return walking;
        case 12: return water;
        case 13: return yoga;
        default: break;
    }
}

export const getAddActivityLogo= (activityId) =>{
    switch (activityId) {
    
        case 1:  return badminton;
        case 2: return basketball;
        case 3: return cycling;
        case 4: return dancing;
        case 6: return hiking;
        case 7: return running;
        case 9: return strength;
        case 10: return swimming;
        case 11: return walking;
        case 13: return yoga;
        default: break;
    }
}

export const addFavoriteActivity = async (activity)=>{
    try {
    const res = await fetch('http://localhost:9000/useractivity/',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(activity),
    })
   return await res.json();
    } catch (error) {
      throw new Error("error in post")
    }
      
  }