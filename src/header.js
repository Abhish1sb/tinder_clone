import React from 'react';
import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
        {/* <h1>this is my header</h1> */}
       
       <IconButton>
         <PersonIcon fontSize="large" className="headerIcon"/>
       </IconButton>
      
       <IconButton>
       <img className="headerLogo" src="https://img.icons8.com/color/2x/--tinder.png" alt="logo" />
       </IconButton>
      
       <IconButton>
        <ForumIcon fontSize="large" className="headerIcon"/>
       </IconButton>

    </div>
  );
}

export default Header;