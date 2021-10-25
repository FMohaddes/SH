import React from 'react'
import styled from "styled-components";
import { MediumText , SmallText , H4 } from "../../styles/global/typography";

function FeatureCard( { title , icon , text } ) {
     
     return (
          <$CardGrid >
               { icon }
               <$H4 >{ title }</$H4 >
               <SmallText >
                    { text }
               </SmallText >
          </$CardGrid >
     );
}

export default FeatureCard;

const $CardGrid = styled.div`
     display         : flex;
     flex-direction  : column;
     background      : ${ p => p.theme.GREY_LIGHT };
     backdrop-filter : blur(6rem);
     height          : 35rem;
     width           : 25rem;
     padding         : 2.5rem;
     margin          : 2rem 3rem;
     align-items     : center;
     position        : relative;
     border-radius   : 2rem;
     overflow        : hidden;
     box-shadow      : .4rem .4rem 1rem 0 rgba(0, 0, 0, 0.1),
          -.4rem -.4rem 1rem 0 rgba(0, 0, 0, 0.1);

     > * {

          :nth-child(1) {
               width      : 8rem;
               height     : 8rem;
               fill       : ${ p => p.theme.TERTIARY };
               z-index    : 33;
               transition : 1s all;

               &:hover {
                    fill : ${ p => p.theme.TERTIARY_LIGHT };

                    }
               }

          }
`
const $H4 = styled( H4 )`
     padding : 1.7rem 0;
     z-index : 33;
     color   : ${ p => p.theme.GREY_DARK_2 };


`


