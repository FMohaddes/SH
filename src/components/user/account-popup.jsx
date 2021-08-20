import React , { useState } from 'react'
import styled , { css } from "styled-components";
import Signup from "./signup";
import Login from "./login";

function AccountPopup( { isOpen } ) {
     const [ isLogin , setIsLogin ] = useState( true )
     
     function handleCreateAccount() {
          setIsLogin( false )
     }
     
     function handleLogin() {
          setIsLogin( true )
     }
     
     return (
          <$Wrapper isOpen = { isOpen } >
               { isLogin ?
                    <Login onclick = { handleCreateAccount } /> :
                    <Signup onclick = { handleLogin } /> }
          </$Wrapper >
     );
}

export default AccountPopup;


const $Wrapper = styled.div`
     height          : 42rem;
     width           : 38rem;
     position        : absolute;
     top             : 7.5rem;
     right           : 11rem;
     background      : ${ p => p.theme.WHITE_O };
     box-shadow      : 0 50px 100px rgba(0, 0, 0, 0.25),
     inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
     backdrop-filter : blur(6rem);
     border-radius   : 2rem;
     padding         : 2rem 3rem;
     opacity         : ${ props => (props.isOpen ? 1 : 0) };
     display         : grid;
     justify-items   : center;
     align-content   : start;
     z-index         : 55;
     transition      : 0.3s ease-in-out;
     visibility      : ${ p => p.isOpen ? "visible" : "hidden" };
     transform       : ${ props =>
          props.isOpen
               ? "skewY(0) rotate(0) translateY(0)"
               : "skewY(-5deg) rotate(5deg) translateY(-30px)" };

     div {
          padding-top     : 1.5rem;
          display         : grid;
          grid-auto-flow  : column;
          grid-column-gap : 2rem;
          }

`
