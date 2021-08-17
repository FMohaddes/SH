import React from 'react'
import styled , { css } from "styled-components";


function CustomButton( { children , ...otherprops } ) {
     
     return (
          <$ButtonStyles { ...otherprops }>
               { children }
          </$ButtonStyles >
     
     
     );
}

export default CustomButton;


const $ButtonStyles = styled.button`
     cursor          : pointer;
     display         : grid;
     grid-column-gap : 1.5rem;
     grid-auto-flow  : column;
     justify-content : center;
     align-items     : center;
     border: none;
     border:.1rem solid ${p => p.tertiaryBorder ? `${ p.theme.TERTIARY_DARK }`
          :"none"};
     background      : ${ p => p.white ?
          "${ p.theme.WHITE }" :p.tertiary ?`${ p.theme.TERTIARY }`
               :"transparent" };
     color           : ${ p => p.white ?
          `${ p.theme.GREY_DARK_2 } ` : `${ p.theme.WHITE }` };

     ${ p => p.lg ? css`
               width         : 22rem;
               height        : 6rem;
               font-size     : 2.5rem;
               border-radius : 10rem; `
          : p.md ? css`
          width  : 15rem;
          height : 5rem;`
               : p.sm && css`
          width  : 11rem;
          height : 3.2rem;
               border-radius : 5rem;
          `
     }
`
