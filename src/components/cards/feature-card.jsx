import React from 'react'
import styled from "styled-components";
import { MediumText , SmallText , H4 } from "../../styles/global/typography";
import { ReactComponent as CurvyShape } from "../../assets/graphics/curvy-shape.svg";

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
     display        : flex;
     flex-direction : column;
     background     : ${ p => p.theme.GREY_LIGHT };
     height         : 35rem;
     width          : 25rem;
     margin         : 2rem 3rem;
     padding        : 2.5rem;
     align-items    : center;
     position       : relative;
     border-radius  : 2rem;
     overflow       : hidden;
     box-shadow     : 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
          -4px -4px 10px 0 rgba(0, 0, 0, 0.1);

     > * {

          :nth-child(1) {
               width   : 8rem;
               height  : 8rem;
               fill    : ${ p => p.theme.TERTIARY };
               z-index : 33;
               }

          }
`
const $H4 = styled( H4 )`
     padding : 1.7rem 0;
     z-index : 33;
     color   : ${ p => p.theme.GREY_DARK_2 };


`


