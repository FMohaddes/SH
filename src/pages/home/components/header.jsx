import React from 'react'
import styled from "styled-components";
import { H1_LG , LargeText , MediumSpan } from "../../../styles/global/typography";
import { $CurvyShape , $CurvyShape2 } from "../../../styles/shapes";
import CustomButton from "../../../components/common/customButtons";
import { motion } from "framer-motion";
import { HeaderText } from "../../../styles/animations/animations";


function Header() {
     return (
          
          <$HeaderWrapper >
               <$BoxWrapper />
               <$Box >
                    <$TextBox >
                         <H1_LG as={motion.h1} variants = { HeaderText }>SHAHTOUR
                              <MediumSpan as={motion.span} variants = { HeaderText }>join us in this journey</MediumSpan >
                         </H1_LG >
                         <CustomButton lg white as={motion.button} variants = { HeaderText }>See all tours</CustomButton >
                    </$TextBox >
                    <$BGVideo >
                         <video autoPlay muted loop >
                              <source src = { "/videos/header.mp4" }
                                   type = "video/mp4" />
                              <source src = { "/videos/header.wbm" }
                                   type = "video/webm" />
                         </video >
                    </$BGVideo >
                    <$CurvyShape />
                    <$CurvyShape2 />
               </$Box >
          </$HeaderWrapper >
     );
}

export default Header;

const $HeaderWrapper = styled.header`
     grid-column           : 1/-1;
     background            : ${ p => p.theme.GREY_DARK_2 };
     height                : 76vh;
     display               : grid;
     grid-template-columns :minmax(3rem, 8rem) 1fr minmax(3rem, 8rem);
     position              : relative;
`
const $BoxWrapper = styled.div`
     background    : ${ p => p.theme.GREY_DARK_2 };
     grid-column   : 2/3;
     height        : 112%;
     grid-row      : 1/2;
     border-radius : 4.3rem;
     box-shadow    : 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
          -4px -4px 10px 0 rgba(0, 0, 0, 0.1);
     @media only screen and (max-width : 50em) {
          grid-column   : 1/-1;
          border-radius : 0;
          }
`

const $Box = styled.div`

     grid-row      : 1/2;
     grid-column   : 2/3;
     position      : relative;
     background    : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.PRIMARY },
     ${ p.theme.PRIMARY_DARK })` };

     height        : 112%;
     display       : grid;
     border-radius : 4rem;
     overflow      : hidden;
     @media only screen and (max-width : 50em) {
          grid-column   : 1/-1;
          border-radius : 0;

          }

`

const $TextBox = styled.div`
     padding-top   : 9rem;
     display       : grid;
     grid-gap      : 2rem;
     line-height   : 1.2;
     align-items   : center;
     align-self    : center;
     justify-self  : center;
     justify-items : center;
     z-index       : 3;

     > * {

          :nth-child(1) {
               color         : ${ p => p.theme.WHITE };
               display       : grid;
               justify-items : center;
               color         : ${ p => p.theme.WHITE };
               text-shadow   : ${ p => p.theme.TEXT_SHADOW };

               span {
                    font-size : 3rem;
                    }
               }
          }
`

const $BGVideo = styled.div`
     position : absolute;
     top      : 0;
     left     : 0;
     height   : 100%;
     width    : 100%;
     z-index  : 1;
     opacity  : .18;

     video {
          height     : 100%;
          width      : 100%;
          object-fit : cover;

          }
`
