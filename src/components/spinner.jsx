import React from 'react'
import styled from 'styled-components';


function Spinner() {
     return (
          <SpinnerOverlay > <SpinnerContainer > </SpinnerContainer ></SpinnerOverlay >
     );
}

export default Spinner;


export const SpinnerOverlay = styled.div`
     height: 100vh;
     width           : 100%;
     display         : flex;
     justify-content : center;
     align-items     : center;
`;

export const SpinnerContainer = styled.div`
     display           : inline-block;
     width             : 50px;
     height            : 50px;
     border            : 5px solid var(--c-grey-light-2);
     border-radius     : 50%;
     border-top-color  : var(--c-blue-dark);
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

