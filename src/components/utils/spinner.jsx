import React from 'react'
import styled from 'styled-components';


function Spinner() {
     return (
          <SpinnerOverlay > <SpinnerContainer > </SpinnerContainer ></SpinnerOverlay >
     );
}

export default Spinner;


export const SpinnerOverlay = styled.div`
     height          : 100vh;
     width           : 100%;
     display         : flex;
     justify-content : center;
     align-items     : center;
`;

export const SpinnerContainer = styled.div`
     display           : inline-block;
     width             : 4rem;
     height            : 4rem;
     border            : .5rem solid ${ p => p.theme.GREY_LIGHT_2 };
     border-radius     : 50%;
     border-top-color  : ${ p => p.theme.PRIMARY };
     animation         : spin 1s ease-in-out infinite;
     -webkit-animation : spin 1s ease-in-out infinite;
     @keyframes spin {
          to {
               -webkit-transform : rotate(360deg);
               }
          }
     @-webkit-keyframes spin {
          to {
               -webkit-transform : rotate(360deg);
               }
          }
`;

