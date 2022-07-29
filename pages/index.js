import React from 'react';
import Footer from '../components/prayertimes/footer';
import Main from '../components/prayertimes/main';
import NavbarComponent from '../components/prayertimes/navbar';

export default function Home() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Main />
      <Footer />
    </React.Fragment>
  )
}
