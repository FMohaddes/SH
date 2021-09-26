import React , { useEffect , useRef , useState } from 'react'
import FormInput from "../common/form/form-input";
import styled from "styled-components";
import { H2 , H3 , H4 , LargeText , SmallText } from "../../styles/global/typography";
import CustomButton from "../common/customButtons";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Name } from "../../assets/icons/name.svg";
import { ReactComponent as Mail } from "../../assets/icons/Mail.svg";
import { ReactComponent as Key } from "../../assets/icons/key.svg";


function Signup( { onclick } ) {
     const inputElement = useRef( null );
     
     useEffect( () => {
          if ( inputElement.current ) {
               inputElement.current.focus();
          }
     } , [] );
     
     
     return (
          < >
               <$LargeText >Welcome </$LargeText >
               <$SmallText >Already have an account? <a onClick = { onclick } >
                    Login</a ></$SmallText >
               <$Form >
                    <FormInput
                         Ref = { inputElement }
                         name = 'username'
                         Icon={<Name/>}
                         hasIcon
                         type = 'text'
                         placeholder = 'Fullname'
                         required
     
                    />
                    <FormInput
                         name = 'name'
                         Icon={<Mail/>}
                         hasIcon
                         type = 'email'
                         placeholder = 'Email'
                         required
                    
                    />
                    <FormInput
                         name = 'password'
                         Icon={<Key/>}
                         hasIcon
                         type = 'password'
                         placeholder = 'Password'
                         required
                    />
                    
                    <$CustomButton sm tertiary type={"submit"}>Signup</$CustomButton >
                    <$SignIn > or sign in with</$SignIn >
                    <div >
                         <$CustomButtonSignIN sm tertiaryBorder >
                              <$Google />
                              Google
                         </$CustomButtonSignIN >
                         <$CustomButtonSignIN sm tertiaryBorder >
                              <$Facebook />
                              Facebook
                         </$CustomButtonSignIN >
                    </div >
               
               </$Form >
          
          </ >
     );
}

export default Signup;


const $Form = styled.form`
     justify-self : stretch;
     display      : grid;
     grid-gap     : 1.3rem;
     margin-top: 1rem;
     div {
          display : flex;
          }
`
const $LargeText = styled( LargeText )`
     color        : ${ p => p.theme.TERTIARY };
     justify-self : start;
     
`
const $CustomButton = styled( CustomButton )`
     width : 14rem;
`
const $CustomButtonSignIN = styled( $CustomButton )`
     color : ${ p => p.theme.GREY_DARK_2 };
`


const $SmallText = styled( SmallText )`
     color        : ${ props => props.theme.GREY_DARK_2 };
     justify-self : start;
     padding      : .4rem .3rem 0;


     a {
          text-decoration : underline;
          color           : ${ props => props.theme.TERTIARY_DARK };
          cursor          : pointer;
          }
`


export const $SignIn = styled.p`
     grid-column-gap       : .5rem;
     align-items           : center;
     font-size             : 1.4rem;
     color                 : ${ props => props.theme.GREY };
     display               : grid;
     font-weight           : 300;
     grid-template-columns : 1fr max-content 1fr;
     height: .5rem;
     &::before, &::after {
          content          : "";
          height           : .1rem;
          opacity          : 60%;
          background-color : currentColor;

          }

`
const $Google = styled( Google )`
     width  : 2rem;
     height : 2rem;
`
const $Facebook = styled( Facebook )`
     width  : 2rem;
     height : 2rem;
`
