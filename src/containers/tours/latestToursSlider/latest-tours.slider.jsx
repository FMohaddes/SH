import React , { useState } from 'react'
import styled from "styled-components";
import TourCard from "../../../components/cards/tours/tour-card";
import Slideshow from "../../../components/HOC/slideshow/slideshow";
import { tours_data } from "../tours-data";
import { H2 } from "../../../styles/global/typography";

const LatestToursCarousel = Slideshow( TourCard )

function LatestToursSlider() {
     const [ state , setState ] = useState( {
               tours : tours_data
          }
     )
     return (
          <$LatestToursWrapper >
               <$Heading >
                    <$H2 >Latest Tours</$H2 >
               </$Heading >
               
               <LatestToursCarousel items = { state.tours } SlidesNumber = { 3 } dots = { false } />
          </$LatestToursWrapper >
     );
}

export default LatestToursSlider;

const $LatestToursWrapper = styled.section`
     grid-column : 1/-1;
     height      : 55rem;
     display     : grid;
     padding     : 1rem 6rem;

`

const $Heading = styled.div`
     display       : flex;
     justify-self: center;
`
const $H2 = styled( H2 )`
     background              : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.GREY_DARK },
     ${ p.theme.GREY })` };
     -webkit-background-clip : text;
     color                   : transparent;
     font-size: 6rem;
`
