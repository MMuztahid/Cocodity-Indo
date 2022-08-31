import React, { useState } from "react";
import { useScrollTrigger, Slide } from "@mui/material";
import { Link } from 'react-scroll';
import './TopBar.css';
import Logo from '../media/LOGO.webp';

function HideOnScroll(props) {
    const { children, window } = props;
    
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
    };

const TopBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () =>  {
    setClicked(!clicked)
  }

  return (
    <HideOnScroll>
      <nav>
        <ul className='button-menu'>
          <li>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={100}>About</Link>
          </li>
          <li>
            <Link activeClass="active" to="Feature" spy={true} smooth={true} offset={0} duration={100}>Feature</Link>
          </li>
          <img src={Logo} alt="Cocodity Indonesia" className='logo'/>
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fa fa-times" :"fa fa-bars"}></i>
          </div>                
          <li>
            <Link activeClass="active" to="Product" spy={true} smooth={true} offset={0} duration={100}>Product</Link>
          </li>
          <li>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={0} duration={100}>Contact</Link>
          </li>
        </ul>
      </nav>
    </HideOnScroll>
  );
}

export default TopBar;