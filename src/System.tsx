import React, { ReactElement } from 'react';
import Pages from './modules';

const { Fragment } = React;

const Boostrap = (pages:any) => {
  // Boot Application here
  console.log('Pages', Pages);
  // extract routes
  // extract navigation
  // extract app shell components
  // compose and return a new 
  return (): ReactElement => {
    return (
      <Fragment>
        Hello World
      </Fragment>
    )
  }
};

export default Boostrap(Pages);