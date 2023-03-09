import React, {useState} from 'react'
import "./topbar.css"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import {Link} from "react-router-dom";


function Topbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className='topbar' >
    <Navbar color="faded" dark>
      
      <NavbarToggler onClick={toggleNavbar} className="me-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar >
          <NavItem>
            <NavLink href="/planets/" className='navLink' style={{color:"white"}}>
            <Link className='link' to="/planets">Gezegenler</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signs/" className='navLink' style={{color:"white"}}>
            <Link className='link' to="/signs">Burçlar</Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/signs/" className='navLink' style={{color:"white"}}>
            <Link className='link' to="/houses">Evler</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarBrand href="/" className="me-auto navLink" style={{color:"white"}}>
        AstroLife
      </NavbarBrand>
    </Navbar>
  </div>
  );
}

export default Topbar;
