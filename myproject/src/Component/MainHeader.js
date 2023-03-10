import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import React, { useState } from 'react';
function MainHeader()
{
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return(
    <>
    <div>
      <Navbar color="lightblack" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/admin">
                <h3>Admin Login</h3>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
               <h3>Contact</h3>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </>
  )
}
export default MainHeader