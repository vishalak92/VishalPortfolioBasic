import React, {Component} from 'react';

import {Navigation, Drawer} from 'react-mdl';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  hideToggle()
  {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }

  render()
  {
    return (
      <Drawer title= {<Link style = {{textDecoration: "none", color: "grey"}} to="/" onClick={() => this.hideToggle()}> My Portfolio </Link>}>
      <Navigation>
              <Link to="/" onClick={() => this.hideToggle()}>Home</Link>
              <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
              <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
      </Navigation>
      </Drawer>
    )
  }
}



export default Navbar;
