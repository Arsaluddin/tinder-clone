// import { SwipeableDrawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Tindercard.css";
import TinderCard from "react-tinder-card";
import axios from './axios';

const Tindercard = () => {

     const [people,setPeople] = useState([]);

     useEffect(()=> {
         async function fetchData() {
            const req = await axios.get("http://localhost:5000/tinder/cards/");
            console.log(req.data);
            setPeople(req.data);

         }

         fetchData();
     },[]);

     const Swiped = (direction, nameTodelete) => {
        console.log("removing" + nameTodelete);
     };

     const outOfFrame = (name) => {
         console.log(name + "left the screen");
     };

    return(
        <>
           <div className="tindercards">
              <div className="tindercard_cardcontainer">
              {people.map((person) => (
                    <TinderCard 
                     className="swipe"
                     key={person.name}
                     preventSwipe={["up","down"]}
                     onSwipe={(dir) => Swiped(dir,person.name)}
                     onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                    
                 ))}
              </div>
           </div>
        </>
    );
}

export default Tindercard;