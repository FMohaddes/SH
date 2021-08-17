import React , { useContext , useEffect , useState } from 'react'
import styled , { ThemeContext } from "styled-components";
import { Toggle } from "../dev/toggle";
import { Link as ReactRouterDomLink , useLocation } from 'react-router-dom';
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { motion } from "framer-motion";
import { PageAnimation } from "../../styles/animations/animations";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import AccountPopup from "../user/account-popup";

const Link = ( { isActive , children , ...props } ) => {
     return (
          <ReactRouterDomLink { ...props }>
               { children }
          </ReactRouterDomLink >
     );
};

function Navbar() {
     // const { id , setTheme } = useContext( ThemeContext );
     const { pathname } = useLocation();
     const [ isOpen , setIsOpen ] = useState( false )
     
     function handleClick( event ) {
          setIsOpen( !isOpen )
     }
     
     function handleClickOutside() {
          setIsOpen( false )
     }
     
     //
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
                         <StyledLink to = "/" isActive = { pathname === '/' } >
                              Home
                         </StyledLink >
                         <StyledLink to = "/tours" isActive = { pathname === '/tours' } >
                              TOURS
                         </StyledLink >
                         <StyledLink to = "/hotels" isActive = { pathname === '/hotels' } >
                              HOTELS
                         </StyledLink >
                         <StyledLink to = "/contact" isActive = { pathname === '/contact' } >
                              CONTACT
                         </StyledLink >
                         <$IconWrapper onClick = { ( e ) => handleClick( e ) } >
                              <$User />
                         </$IconWrapper >
                         <AccountPopup isOpen = { isOpen } />
                    </$Menu >
                    {/*<Toggle isActive = { id === 'dark' } onToggle = { setTheme } />*/ }
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
     display         : flex;
     justify-content : space-between;
     align-items     : center;
`

const StyledLink = styled( Link )`
     font-size      : 1.8rem;
     text-align     : center;
     box-sizing     : border-box;
     margin         : auto 0;
     font-weight    : ${ p => p.isActive ? '800' : '400' };
     color          : ${ p => p.isActive ? `${ p.theme.WHITE }` : `${ p.theme.GREY }` };
     text-transform : uppercase;
`
const $IconWrapper = styled.div`
     cursor : pointer;

`

const $User = styled( User )`
     width  : 4rem;
     height : 3.2rem;
     fill   : ${ p => p.theme.GREY_LIGHT };
     cursor : pointer;
`
