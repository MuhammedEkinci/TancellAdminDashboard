import React, { useState, useRef, useEffect } from 'react';
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
            <MDBSideNavLink>
              <MDBIcon far icon='smile' className='fa-fw me-3' />
              Link 1
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={modeCollapse1} onClick={() => setModeCollapse1(!modeCollapse1)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 1
            </MDBSideNavLink>
            <MDBSideNavCollapse show={modeCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={modeCollapse2} onClick={() => setModeCollapse2(!modeCollapse2)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 2
            </MDBSideNavLink>
            <MDBSideNavCollapse show={modeCollapse2}>
              <MDBSideNavLink>Link 4</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
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