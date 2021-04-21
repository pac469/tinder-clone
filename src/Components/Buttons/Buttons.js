import React from 'react';
import "./Buttons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function Buttons(){
    return(
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat"> <ReplayIcon fontSize="Large"/> </IconButton>
            <IconButton className="swipeButtons__close"> <CloseIcon fontSize="Large"/> </IconButton>
            <IconButton className="swipeButtons__star"> <StarRateIcon fontSize="Large"/> </IconButton>
            <IconButton className="swipeButtons__right"> <FavoriteIcon fontSize="Large"/> </IconButton>
            <IconButton className="swipeButtons__lightning"> <FlashOnIcon fonstSize="Large"/> </IconButton>
        </div>
    );
}

export default Buttons;