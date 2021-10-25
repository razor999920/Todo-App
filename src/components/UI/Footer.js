import React from "react";
import classes from './Footer.module.css'

const Footer = props => {
    return <React.Fragment>
       <footer className={classes.footer}>
            <span className='text-muted'>All Rights Reserved by Raza</span>
       </footer>
    </React.Fragment>
}

export default Footer;