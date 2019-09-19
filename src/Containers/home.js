import React, { Fragment } from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Container from '@material-ui/core/Container';
import Slide from '../Components/card';

const Home = () => {
  const slides = [{
    title: "Bohemian Bedroom",
    description: "Bedroom Area With No People Inside Building",
    url: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: 207
  },{
    title: "Green Leaf Plant",
    description: "The succulent leaves of most Agave species have sharp marginal teeth, an extremely sharp terminal spine, and are very fibrous inside. The stout stem is usually extremely short, which may make the plant appear as though it is stemless.",
    url: "https://images.pexels.com/photos/2239677/pexels-photo-2239677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: 12
  },{
    title: "White Flowers In Bloom",
    description: "'Hanami' is the centuries-old practice of drinking under a blooming sakura or ume tree. The custom is said to have started during the Nara period (710–794), when it was ume blossoms that people admired in the beginning, but by the Heian period (794–1185) cherry blossoms came to attract more attention, and hanami was synonymous with sakura.[8] From then on, in both waka and haiku, 'flowers' (花 hana) meant 'cherry blossoms'. The custom was originally limited to the elite of the Imperial Court, but soon spread to samurai society and, by the Edo period, to the common people as well. Tokugawa Yoshimune planted areas of cherry blossom trees to encourage this. Under the sakura trees, people had lunch and drank sake in cheerful feasts.",
    url: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: 175
  },{
    title: "Building",
    description: "Modern Architecture",
    url: "https://images.pexels.com/photos/1774931/pexels-photo-1774931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: 473
  },{
    title: "Girl",
    description: "Women's White Crew Neck Shirt",
    url: "https://images.pexels.com/photos/1804514/pexels-photo-1804514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    likes: 423
  },];

  const [hovered, setHover] = React.useState(false)
  const [defaultIndex, setIndex] = React.useState(0)

  const beginHover = () => {
    setHover(true)
    console.log("im being hovered");
  }
  const stopHover = () => {
    setHover(false)
    setDefaultIndex();
  }
  const onSlideChanged = e => {
    setIndex(e.item)
  }  
  const setDefaultIndex = () => {
    if(!hovered) {
      setIndex(0)
    }
  }

  return ( 
    <Fragment>
      <Container style={{
                          height: "100vh", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center"
                        }} >                       
          <Carousel
            dotsDisabled 
            autoPlayInterval={2000}
            duration={700}
            onSlideChanged={onSlideChanged}
            stopAutoPlayOnHover={false}
            autoPlay={hovered ? true : false}
            infinite
            mouseDragEnabled
            buttonsDisabled
            slideToIndex={defaultIndex} >              
                {
                  slides.map((arr, key) =>
                    <Slide
                      key={key}
                      title={arr.title}
                      description={arr.description}
                      url={arr.url}
                      likes={arr.likes}
                      slideToIndex={hovered ? null : defaultIndex}
                      beginHover={beginHover}
                      stopHover={stopHover}
                    />                  
                  )                  
                }               
          </Carousel>
      </Container>
    </Fragment>
  );
}

export default Home;