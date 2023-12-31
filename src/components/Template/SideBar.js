import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Aditya Lad</h2>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Aditya Lad </p>
    </section>
  </section>
);

export default SideBar;
