import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Aditya personal website"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my Website </Link></h2>
          <p>
          Move around the tabs to know more about me.
          </p>
        </div>
      </header>
      <p> </p>
    </article>
  </Main>
);

export default Index;
