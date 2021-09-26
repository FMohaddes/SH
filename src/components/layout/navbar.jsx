import React , { useContext , useEffect , useState } from 'react'
import styled , { ThemeContext } from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

import AccountPopup from "../user/account-popup";
import { logDOM } from "@testing-library/react";
import { NavLink , useLocation } from "react-router-dom";


function Navbar() {
     const { id , setCurrent } = useContext( ThemeContext );
     const { pathname } = useLocation();
     const [ isOpen , setIsOpen ] = useState( false )
     
     function handleClick( event ) {
          setIsOpen( !isOpen )
     }
     function handleClickOutside() {
          setIsOpen( false )
     }
     
     
     // useEffect( () => {
     //      document.addEventListener( "mousedown" , handleClickOutside )
     //      return () => {
     //           document.removeEventListener( "mousedown" , handleClickOutside )
     //      }
     // } , [] )
     const menuItems = [ "HOME" , "TOURS" , "BLOG" , "CONTACT" ]
     return (
               
               <$NavbarGrid role="navigation">
                    <Logo />
                    <$Menu >
                         {
                              menuItems.map( ( item , i ) => {
                                        return i === 0 ?
                                             (<$NavLink exact key={i} to = { `/` } activeClassName="selected" >
                                                  { item }
                                             </$NavLink >) :
                                             (<$NavLink key={i} to = { `/${ item }` }
                                                  activeClassName="selected" >
                                                  { item }
                                             </$NavLink >)
                                   }
                              )
                         }
                         
                         <$IconWrapper >
                              <$Search />
                              <$User onClick = { ( e ) => handleClick( e ) } />
                             {/*<Toggle isActive = { id === 'dark' } onToggle = { setCurrent } />*/}
                         </$IconWrapper >
                         <AccountPopup isOpen = { isOpen } />
                    </$Menu >
               </$NavbarGrid >
     );
}

export default Navbar;

const $NavbarGrid = styled.nav`
     display               : grid;
     width                 : 100%;
     grid-template-columns :minmax(4rem, 11rem) 1fr 1fr minmax(4rem, 11rem);
     height                : 15vh;
     background            : ${ p => p.theme.GREY_DARK_2 };
     align-content         : center;
     overflow              : hidden;
     justify-content       : center;

     @media only screen and (max-width : 50em) {
          grid-template-columns :minmax(1rem, 3rem) 1fr 1fr minmax(1rem, 3rem);
          }

     > * {
          :nth-child(1) {
               width       : 7rem;
               grid-row    : 1/2;
               grid-column : 2/3;
               }

          }

`
const $Menu = styled.div`
     grid-row        : 1/2;
     grid-column     : 3/4;
     display         : grid;
     grid-column-gap : 2.5rem;
     justify-items   : end;
     grid-auto-flow  : column;
     align-items     : center;
     padding         : 1rem 0 0;
`

const $NavLink = styled( NavLink )`
     font-size      : 1.8rem;
     font-weight    :  400;
     color          : ${p => p.theme.GREY };
     text-transform : uppercase;
     &.selected{
          font-size      : 1.8rem;
          font-weight    : 600;
          color          : ${p=> p.theme.WHITE };
          text-transform : uppercase;
          }
`
const $IconWrapper = styled.div`
     cursor         : pointer;
     display        : grid;
     grid-auto-flow : column;
     margin-top: -.8rem;
`

const $User = styled( User )`
     width  : 4rem;
     height : 2.5rem;
     fill   : ${ p => p.theme.GREY_LIGHT };
     cursor : pointer;
`
const $Search = styled( Search )`
     width  : 4rem;
     height : 2.3rem;
     align-self: end;
     fill   : ${ p => p.theme.GREY_LIGHT };
     cursor : pointer;
`

