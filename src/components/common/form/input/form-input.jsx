import React from 'react'
import styled from "styled-components";

function FormInput( { name , type , placeholder ,Ref } ) {
     console.log(Ref)
     
     return (
          <>
               <$Input ref={Ref} type = { type } placeholder = { placeholder } name = { name } />
          </>
     
     );
}

export default FormInput;

export const $Input = styled.input`
     font-family      : inherit;
     color            : inherit;
     padding          : 1rem 2rem;
     background-color : ${p => p.theme.WHITE};
     border           : none;
     border-radius    : 1.5rem;
     width            : 100%;
     height           : 5rem;
     border-bottom    : 3px solid transparent;
     display          : block;

     &:focus {
          outline       : none;
          //border-bottom : 3px solid var(--c-green);

          }

     &:focus:invalid {
          //border-bottom : 3px solid var(--c-red);
          }

     &::-webkit-input-placeholder {
          color : ${p => p.theme.GREY};
          }

     //&::-webkit-input-placeholder:after {
     //     content : " *";
     //     color   : red;
     //     }
`
