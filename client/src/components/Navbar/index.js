import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  return (
    <>
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
    </>
  );
}