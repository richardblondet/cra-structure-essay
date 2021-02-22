import React from 'react';

const Home = () => {
  return <div>Hello home</div>;
};

const HomePage = () => ({
  name: 'Home',
  routerProps: {
    path: '/',
    component: Home
  },
  providers: []
});

export default HomePage();