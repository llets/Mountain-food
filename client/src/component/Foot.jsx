import {React} from 'react'
import classes from './Foot.module.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Foot = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.social}>
          <FacebookIcon  fontSize="large"/>
          <TwitterIcon fontSize="large"/>
          <LinkedInIcon fontSize="large"/>
          <InstagramIcon fontSize="large"/>
        </div>
        <div className={classes.menu}>
            <a className={classes.menu_item} href="#">Home</a>
            <a className={classes.menu_item} href="#">About</a>
            <a className={classes.menu_item} href="#">Services</a>
            <a className={classes.menu_item} href="#">Team</a>
            <a className={classes.menu_item} href="#">Contact</a>
        </div>
        <p className={classes.author}>©2023 Mountain Food | All Rights Reserved</p>
    </div>
  )
}

export default Foot