import React from 'react'
import styled from "styled-components";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Geography } from "../../../assets/icons/geography.svg";
import { ReactComponent as Compass } from "../../../assets/icons/compass.svg";
import { ReactComponent as Map } from "../../../assets/icons/map.svg";
import FeatureCard from "../../../components/cards/feature-card";
import Slideshow from "../../../components/HOC/slideshow/slideshow";

const FeaturesCarousel = Slideshow( FeatureCard )

function Features() {
     const [ state ] = React.useState( {
          features : [
               {
                    title : 'Live a healthier life' ,
                    icon  : <Heart /> ,
                    id    : 1 ,
                    text  : "  Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing elit. Aliquam, atque consectetur?Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing elit. Aliquam, atque consectetur?"
               } ,
               {
                    title : 'Explore the world' ,
                    icon  : <Geography /> ,
                    id    : 2 ,
                    text  : "  Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing Aliquam, atque consectetur?   Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing elit. Aliquam, atque consectetur?"
                    
                    
               } ,
               {
                    title : 'Find your way' ,
                    icon  : <Compass /> ,
                    id    : 3 ,
                    text  : "  Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing elit. Aliquam, atque consectetur?   Lorem ipsum dolotetur \n" +
                         "            Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing elit. Aliquam"
               } ,
               {
                    title : 'Meet nature' ,
                    icon  : <Map /> ,
                    id    : 4 ,
                    text  : "  Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing elit. Aliquam, atque consectetur?   Lorem ipsum dolor sit amet, consectetur \n" +
                         "            adipisicing elit. amet, consectetur \n" +
                         "            adipisicing elit. Aliquam, atque consectetur?"
               } ,
          
          ]
     } )
     
     return (
          <$FeaturesWrapper >
               <FeaturesCarousel items = { state.features } SlidesNumber = { 4 } dots={true}/>
          </$FeaturesWrapper >
     );
}

export default Features;


const $FeaturesWrapper = styled.section`
     grid-column           : 1/-1;
     display               : grid;
     padding               : 9rem 6rem;
     box-shadow            : 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
          -4px -4px 10px 0 rgba(0, 0, 0, 0.1);
     background            : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.PRIMARY },
     ${ p.theme.PRIMARY_DARK })` };
     background-position   : top;
     background-size       : cover;


`

