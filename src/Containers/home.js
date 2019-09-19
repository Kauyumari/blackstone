import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from '../Components/card';

const Home = () => {
  const slides = [{},{},{},{},{},{},{},{},{},{}]
  const responsive = {
    mobile
  }
  return ( 
    <Fragment>
      <Container style={{
                          height: "100vh", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center"
                        }} >
        <Carousel>
          {
            slides.map((arr, key) => 
              <Slide/>
            )
          }
        </Carousel>
      </Container>
    </Fragment>
  );
}

export default Home;