import React from 'react'
import styled from "styled-components";


function FormTextarea( { placeholder , rows , ...otherProps } ) {
     return (
          < >
               <$Textarea placeholder = { placeholder } rows = { rows } { ...otherProps }/>
          </ >
     );
}

export default FormTextarea;

export const $Textarea = styled.textarea`
     width            : 100%;
     font-size        : 1.4rem;
     line-height      : 2rem;
     background-color : var(--c-white);
     padding          : 1.1rem 2rem;
     transition       : all .2s;
     border           : none;
     border-radius    : var(--bdrs-card);
     box-shadow       : ${ props => props.blog ? "var(--bxsh-blue)" :
     "var(--bxsh-grey)" };
     resize           : none;
     font-family: var(--font-primary-light);

     &:focus {
          outline : none;
          }

`
