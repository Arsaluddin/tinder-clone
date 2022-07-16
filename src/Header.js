import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


const Header = () => {
    return(
        <>
          <div className="header">
           <IconButton>
             <PersonIcon fontSize="large" className="header_icon"/>
           </IconButton>
           <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/TinderLogo-2017.svg" className="header_logo">
           </img>
           <IconButton>
             <ForumIcon fontSize="large" className="header_icon"/>
           </IconButton>
          </div>
        </>
    );
}

export default Header;