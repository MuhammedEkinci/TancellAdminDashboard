import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  MDBSideNav, 
  MDBSideNavMenu, 
  MDBSideNavItem, 
  MDBSideNavLink, 
  MDBSideNavCollapse, 
  MDBBtn, 
  MDBIcon,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

import "./sidenav.css";

export default function App() {
  const [modeOpen, setModeOpen] = useState(false);
  const [modeCollapse1, setModeCollapse1] = useState(true);
  const [modeCollapse2, setModeCollapse2] = useState(false);
  const [mode, setMode] = useState('over');
  const [activeBtn, setActiveBtn] = useState('first');
  const sidenavContent = useRef(null);
  const [container, setContainer] = useState();

  useEffect(() => {
    setContainer(sidenavContent.current);
  }, []);


  return (
    <>
      <MDBSideNav
        mode={mode}
        isOpen={modeOpen}
        contentRef={container}
        absolute
        getOpenState={(e) => setModeOpen(e)}
      >
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <NavLink className="navlink-link" to="/dashboard">
              <MDBSideNavLink className="navlink-link">
                <MDBIcon fas icon="home" className='fa-fw me-3'/>
                Dashboard
              </MDBSideNavLink>
            </NavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={modeCollapse1} onClick={() => setModeCollapse1(!modeCollapse1)}>
              <MDBIcon fas icon="tags" className='fa-fw me-3' />
              Products
            </MDBSideNavLink>
            <MDBSideNavCollapse show={modeCollapse1}>
              <NavLink className="navlink-link" to="/Add-Product"><MDBSideNavLink>Add Product</MDBSideNavLink></NavLink>
              <NavLink className="navlink-link" to="/View-Product"><MDBSideNavLink>View Products</MDBSideNavLink></NavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={modeCollapse2} onClick={() => setModeCollapse2(!modeCollapse2)}>
              <MDBIcon fas icon="mobile" className='fa-fw me-3' />
              Category
            </MDBSideNavLink>
            <MDBSideNavCollapse show={modeCollapse2}>
            <NavLink className="navlink-link" to="/View-Category"><MDBSideNavLink>View Category</MDBSideNavLink></NavLink>
            <NavLink className="navlink-link" to="/Add-Category"><MDBSideNavLink>Add Category</MDBSideNavLink></NavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <NavLink className="navlink-link" to="/Product-Type">
              <MDBSideNavLink >
                  <MDBIcon fas icon="layer-group"  className='fa-fw me-3'/>
                    Product Type
              </MDBSideNavLink>
            </NavLink>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div ref={sidenavContent}>
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBIcon fas icon='bars'  onClick={() => setModeOpen(!modeOpen)} id="sidenav-btn"/>
            <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        </MDBNavbar>
      </div>
    </>
  );
}