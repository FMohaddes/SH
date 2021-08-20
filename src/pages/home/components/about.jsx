import React from 'react'
import styled from "styled-components";
import { H2 , H4 , MediumText } from "../../../styles/global/typography";
import EggShape from '../../../assets/graphics/egg-shape.svg'
import { Link } from "react-router-dom";


function About() {
     return (
          <$AboutGrid >
               <$H2 >About us</$H2 >
               <$AboutImg src = { "/images/homePage/about.png" } />
               <$MediumText >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    . Accusantium, aliquid aut dolore illo minima, neque placeat provident quaerat qui
                    rerum
                    sit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    . Accusantium, aliquid aut dolore illo minima, neque placeat provident quaerat qui
                    rerum <br />
                    sit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    . Accusantium, aliquid aut dolore illo minima, neque placeat provident quaerat qui
                    rerum
                    sit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    . Accusantium, aliquid aut dolore illo minima, neque placeat provident quaerat qui
                    <br />
                    sit vitae. . Accusantium, aliquid aut dolore illo minima, neque placeat provident
                    quaerat qui rerum
                    sit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    sit vitae.
                    sit vitae. . Accusantium, aliquid aut dolore illo minima, neque placeat provident
                    quaerat qui rerum
                    sit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    sit vitae.
               
               </$MediumText >
               <$ReadMore>Read more &rarr;</$ReadMore>
          </$AboutGrid >
     );
}

export default About;

const $AboutGrid = styled.section`
     grid-column : 2/3;
     height      : 70vh;
     position    : relative;
`
const $H2 = styled( H2 )`
     display                 : inline-block;
     background              : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.GREY_DARK_2 },
     ${ p.theme.GREY })` };
     -webkit-background-clip : text;
     color                   : transparent;
`


const $MediumText = styled( MediumText )`
     color : ${ p => p.theme.GREY_DARK_2 };
`
const $AboutImg = styled.img`
     height        : 34rem;
     float         : right;
     shape-outside : url("/images/homePage/about.png");
     margin-top    : 2.6rem;
     margin-right  : -4.5rem;
     shape-margin  : 2.5rem;

`
const $ReadMore = styled( Link )`
     &:link,
     &:visited {
          color           : ${ p => p.theme.TERTIARY };
          display         : inline-block;
          text-decoration : none;
          border-bottom   : .1rem solid ${ p => p.theme.TERTIARY };
          padding         : .3rem;
          margin-top      : .5rem;
          font-weight     : 800;
          font-size       : 1.5rem;

          &:hover {
               background-color : ${ p => p.theme.TERTIARY };
               color            : ${ p => p.theme.WHITE };
               //box-shadow : 0 1rem 2rem rgba(var(--color-Black), .15);
               }

          &:active {
               //box-shadow : 0 .5rem 1rem rgba(var(--color-Black), .15);
               transform : translateY(0);
               }
          }
`
