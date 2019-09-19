import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Slide from '../Components/card';

const Home = () => {
  return ( 
    <Fragment>
      <Container style={{
                          height: "100vh", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center"
                        }} >
        <Slide/>
      </Container>
    </Fragment>
  );
}

export default Home;