import React from "react"
import styled from "styled-components";

function Footer() {
     return (
          <$Footer >
               <p >
                    Copyright © Shahtour. All rights reserved. Legal notice
               </p >
          </$Footer >
     
     );
}

export default Footer;


const $Footer = styled.section`
     grid-column      : 1/-1;
     grid-row         : 8/9;
     background-color : ${ p => p.theme.GREY_DARK_2 };
     font-size        : 1.5rem;
     height           : 15vh;
     display          : grid;
     justify-items    : center;
     align-items      : center;
     margin-top       : 11rem;
     color            : ${ p => p.theme.GREY_LIGHT };


`
