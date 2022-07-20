import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from "@mui/material";


const SwipeButtons = () => {
    return(
        <>
           <div className="swipebuttons">
              <IconButton className="swipebutton_repeat">
                <ReplayIcon className="swipebutton_repeat" fontSize="large"/>
              </IconButton>
              <IconButton className="swipebutton_close">
                <CloseIcon className="swipebutton_close" fontSize="large"/>
              </IconButton>
              <IconButton className="swipebutton_Starrate">
                <StarRateIcon className="swipebutton_Starrate" fontSize="large"/>
              </IconButton>
              <IconButton className="swipebutton_favorite">
                <FavoriteIcon className="swipebutton_favorite" fontSize="large"/>
              </IconButton>
              <IconButton className="swipebutton_flashon">
                <FlashOnIcon className="swipebutton_flashon" fontSize="large"/>
              </IconButton>
           </div>
        </>
    );
}


export default SwipeButtons;