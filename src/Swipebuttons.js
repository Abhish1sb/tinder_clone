import React from 'react';
import "./Swipebuttons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function Swipebuttons() {
  return (
    <div className="swipebuttons">
        {/* <h3>Swipebuttons</h3> */}
        <IconButton className="swipebuttons_replay">
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipebuttons_close">
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipebuttons_star">
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipebuttons_favourite">
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipebuttons_flashon">
            <FlashOnIcon fontSize='large' />
        </IconButton>

    </div>
  )
}
export default Swipebuttons