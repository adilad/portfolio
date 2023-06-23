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
          <h2><Link to="/">Hey there</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> TBD </p>
    </article>
  </Main>
);

export default Index;
