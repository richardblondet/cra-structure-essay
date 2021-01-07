import React from 'react';

const Home = () => {
  return <div>Hello home</div>;
}

export default {
  name: 'Home',
  routeProps: {
    path: '/',
    component: Home
  }
};