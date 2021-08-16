import React , { useContext } from 'react'
import styled , { ThemeContext } from "styled-components";
import { Toggle } from "../toggle";
import { Link as ReactRouterDomLink , useLocation } from 'react-router-dom';

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
     
     return (
          <$NavbarGrid >
               <img src = { "/images/logo/logo.png" } alt = "" />
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
                    <StyledLink to = "/login" isActive = { pathname === '/login' } >
                         Login
                    </StyledLink >
               </$Menu >
               
               {/*<Toggle isActive = { id === 'dark' } onToggle = { setTheme } />*/ }
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
     justify-content: center;
     img {
          grid-row    : 1/2;
          grid-column : 2/3;
          width       : 16%;
          }
`
const $Menu = styled.div`
     grid-row        : 1/2;
     grid-column     : 3/4;
     display         : flex;
     justify-content : space-between;

`

const StyledLink = styled( Link )`
     padding        : 4px 8px;
     display        : block;
     font-size      : 1.6rem;
     text-align     : center;
     box-sizing     : border-box;
     margin         : auto 0;
     font-weight    : ${ p => p.isActive ? '800' : '400' };
     color          : ${ p => p.isActive ? `${ p.theme.WHITE }` : `${ p.theme.GREY }` };
     text-transform : uppercase;
`
