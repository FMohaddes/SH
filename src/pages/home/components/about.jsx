import React from 'react'
import styled from "styled-components";
import { H2 , H4 , MediumText } from "../../../styles/global/typography";
import EggShape from '../../../assets/graphics/egg-shape.svg'
import { Link } from "react-router-dom";


function About() {
     return (
          <$AboutGrid >
               <$H2 >About us</$H2 >
               <$AboutImg src = { "/images/about.png" } />
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
          </$AboutGrid >
     );
}

export default About;

const $AboutGrid = styled.section`
     margin-top  : 5rem;
     grid-column : 2/3;
     height      : 55rem;

`
const $H2 = styled( H2 )`
     display                 : inline-block;
     background              : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.GREY },
     ${ p.theme.GREY_DARK })` };
     -webkit-background-clip : text;
     color                   : transparent;
`


const $MediumText = styled( MediumText )`
     color : ${ p => p.theme.GREY_DARK_2 };
`
const $AboutImg = styled.img`
     height        : 34rem;
     float         : right;
     shape-outside : url("/images/about.png");
     margin-top    : 1rem;
     margin-right  : -4rem;
     shape-margin  : 25px;

`
const $ReadMore = styled( Link )`
     &:link,
     &:visited {
          color           : ${ p => p.theme.PRIMARY };
          display         : inline-block;
          text-decoration : none;
          border-bottom   : .1rem solid ${ p => p.theme.PRIMARY };
          padding         : .3rem;
          margin-top      : .5rem;
          font-weight     : 400;
          font-size       : 1.5rem;

          &:hover {
               background-color : ${ p => p.theme.PRIMARY };
               color            : ${ p => p.theme.WHITE };
               //box-shadow : 0 1rem 2rem rgba(var(--color-Black), .15);
               }

          &:active {
               //box-shadow : 0 .5rem 1rem rgba(var(--color-Black), .15);
               transform : translateY(0);
               }
          }



`
