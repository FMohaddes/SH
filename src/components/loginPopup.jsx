import React from 'react'
import styled from "styled-components";
import FormInput from "./common/form/input/form-input";
import CustomButton from "./common/customButtons";
import { H1 , H2 } from "../styles/global/typography";

function LoginPopup( { isOpen } ) {
     return (
          <$Wrapper isOpen = { isOpen } >
               <$H2 >Login</$H2 >
               <FormInput
                    name = ''
                    type = 'email'
                    placeholder = 'Email'
                    required
               />
               <FormInput
                    name = ''
                    type = 'password'
                    placeholder = 'password'
                    required
               />
               <div >
                    <$CustomButton sm tertiary >login</$CustomButton >
                    <$CustomButton sm white tertiaryBorder>signup</$CustomButton >
               </div >
          
          </$Wrapper >
     );
}

export default LoginPopup;


const $Wrapper = styled.div`
     height          : 40rem;
     position        : absolute;
     top             : 7.5rem;
     right           : 11rem;
     background      : ${ p => p.theme.WHITE_O };
     box-shadow      : 0 50px 100px rgba(0, 0, 0, 0.25),
     inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
     backdrop-filter : blur(5rem);
     border-radius   : 2rem;
     padding         : 4rem 3rem;
     opacity         : ${ props => (props.isOpen ? 1 : 0) };
     display         : grid;
     grid-gap        : 2rem;
     justify-items   : center;
     align-content   : start;
     z-index         : 55;
     transition      : 0.3s ease-in-out;
     visibility      : ${ isOpen => isOpen ? "visible" : "hidden" };
     width           : ${ isOpen => isOpen ? "28%" : "0" };
     pointer-events  : none;
     transform       : ${ props =>
          props.isOpen
               ? "skewY(0) rotate(0) translateY(0)"
               : "skewY(-5deg) rotate(5deg) translateY(-30px)" };

     > * {
          :hover {
               pointer-events : visibleFill;
               }
          }

     div {
          padding-top     : 1.5rem;
          display         : grid;
          grid-auto-flow  : column;
          grid-column-gap : 2rem;
          }

`
const $H2 = styled( H2 )`
     color      : ${ p => p.theme.TERTIARY };
     justify-self: start;
     
`
const $CustomButton=styled(CustomButton)`

     width  : 14rem;

`
