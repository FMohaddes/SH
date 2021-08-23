import React , { useContext , useEffect , useState } from 'react'
import styled , { ThemeContext } from "styled-components";
import { Toggle } from "../dev/toggle";
import { Link as ReactRouterDomLink , useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { PageAnimation } from "../../styles/animations/animations";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";

import AccountPopup from "../user/account-popup";

const Link = ( { isActive , children , ...props } ) => {
     return (
          <ReactRouterDomLink { ...props }>
               { children }
          </ReactRouterDomLink >
     );
};

function Navbar() {
     const { id , setTheme } = useContext( ThemeContext );
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
     
     return (
          <motion.div variants = { PageAnimation } initial = "hidden" animate = "show" >
               
               <$NavbarGrid >
                    <Logo />
                    <$Menu >
                         <$Link to = "/" isActive = { pathname === '/' } >
                              Home
                         </$Link >
                         <$Link to = "/tours" isActive = { pathname === '/tours' } >
                              TOURS
                         </$Link >
                         <$Link to = "/hotels" isActive = { pathname === '/hotels' } >
                              BLOG
                         </$Link >
                         <$Link to = "/contact" isActive = { pathname === '/contact' } >
                              CONTACT
                         </$Link >
                         <$IconWrapper >
                              <$Search />
                              <$User onClick = { ( e ) => handleClick( e ) } />
                              {/*<Toggle isActive = { id === 'dark' } onToggle = { setTheme } />*/ }
                         </$IconWrapper >
                         <AccountPopup isOpen = { isOpen } />
                    </$Menu >
               </$NavbarGrid >
          </motion.div >
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

const $Link = styled( Link )`
     font-size      : 1.8rem;
     font-weight    : ${ p => p.isActive ? '800' : '400' };
     color          : ${ p => p.isActive ? `${ p.theme.WHITE }` : `${ p.theme.GREY }` };
     text-transform : uppercase;
`
const $IconWrapper = styled.div`
     cursor  : pointer;
     display : grid;
     grid-auto-flow: column;
     justify-items: start;
     align-items: start;
`

const $User = styled( User )`
     width  : 4rem;
     height : 3rem;
     fill   : ${ p => p.theme.GREY_LIGHT };
     cursor : pointer;
`
const $Search = styled( Search )`
     width  : 4rem;
     height : 2.6rem;
     fill   : ${ p => p.theme.GREY_LIGHT };
     cursor : pointer;
`

const $Sun = styled( Sun )`
     width  : 4rem;
     height : 2.6rem;
     fill   : ${ p => p.theme.GREY_LIGHT };
     cursor : pointer;
`


