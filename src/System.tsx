import React from 'react';
import Pages from './pages';

const { Fragment } = React;

const System: React.FC<React.ReactNode> = ({ children }) => {

  // Boot Application here
  console.log('Pages', Pages);

  return (
    <Fragment>
      Hello World
    </Fragment>
  );
};

export default System;