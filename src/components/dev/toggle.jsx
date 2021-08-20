import React from 'react';
import styled from 'styled-components';


export function Toggle( { isActive , onToggle } ) {
     return (
          <ToggleWrapper onClick = { onToggle } >
               <Notch isActive = { isActive } />
          </ToggleWrapper >
     )
}

const ToggleWrapper = styled.div`
     width            : 5rem;
     min-width        : 5rem;
     height           : 2.5rem;
     border-radius    : 2.5rem;
     border           : .1rem solid ${ p => p.theme.GREY };
     margin           : auto;
     display          : flex;
`;

const Notch = styled.div`
     height        : 2.1rem;
     width         : 2.1rem;
     border        : .1rem solid #666;
     background    : white;
     margin-top    : .1rem;
     border-radius : 50%;
     transition    : transform 0.1s linear;
     transform     : translate(${ p => p.isActive ? '2.6rem' : '.1rem' });
`
