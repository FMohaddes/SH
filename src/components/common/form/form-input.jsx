import React from 'react'
import styled from "styled-components";

function FormInput( { name , type , placeholder , Ref , hasIcon , Icon , ...other } ) {
     return (
          <$Wrapper >
               <$Input ref = { Ref } type = { type } placeholder = { placeholder }
                    name = { name } { ...other } icon = { hasIcon } />
               { Icon }
          </$Wrapper >
     
     );
}

export default FormInput;

const $Wrapper = styled.div`
     position : relative;
     margin-top: -1rem;

     > * {
          :nth-child(2) {
               position : absolute;
               top      : 2.7rem;
               left     : 1rem;
               width    : 2rem;
               height   : 2rem;
               fill     : ${ p => p.theme.GREY };
               }
          }
`


export const $Input = styled.input`
     font-family      : inherit;
     color            : inherit;
     padding          : ${ p => p.icon ? ".3rem 3.5rem" : ".3rem 2rem" };
     background-color : ${ p => p.theme.WHITE };
     border           : none;
     width            : 100%;
     border-radius    : 1.4rem;
     height           : 4.5rem;
     border-bottom    : 3px solid transparent;
     display          : block;

     &:focus {
          outline : none;
          //border-bottom : 3px solid var(--c-green);

          }

     &:focus:invalid {
          //border-bottom : 3px solid var(--c-red);
          }

     &::-webkit-input-placeholder {
          color : ${ p => p.theme.GREY };
          }

     //&::-webkit-input-placeholder:after {
     //     content : " *";
     //     color   : red;
     //     }
`
