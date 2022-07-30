import React, { useEffect, useState } from 'react';
import { Container, Button, Navlink, Nav, NavItem, NavbarBrand, Navbar, NavbarToggler, Collapse, Form, FormGroup, Input } from 'reactstrap';
import Link from 'next/link';

function NavbarComponent() {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ navClass, setNavClass ] = useState('')

    const toggle = () => setIsOpen(!isOpen)

    useEffect(() => {
        window.addEventListener('scroll', scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50){
            setNavClass('is-sticky')
        } else {
            setNavClass('')
        }
    }

  return (
    <React.Fragment>
        <Container className='g-0'>
            <Navbar className={'navbar-height' + navClass}>
                <NavbarBrand href='#' className='fs-4'><strong>Prayer</strong><i>Times</i></NavbarBrand>
                
                <div className='d-flex flex-row align-items-center fs-6'>
                    <p className='align-middle'>Enschede, Netherland</p>
                    <Link href="#"><a className='text-decoration-none'><i className="ri-map-pin-line mx-2 text-dark"></i></a></Link>
                </div>
            </Navbar>
        </Container>
    </React.Fragment>
  )
}

export default NavbarComponent