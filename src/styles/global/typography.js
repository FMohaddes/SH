import styled , { css } from "styled-components";

const ff=css`
     font-family:'Playfair Display', serif;
`

export const H1_LG = styled.h1`
     font-weight : 900;
     font-size   : 9rem;
     ${ff}
`

export const H1 = styled.h1`
     font-weight : 900;
     font-size   : 5rem;
  
`

export const H2 = styled.h2`
     font-weight : bold;
     font-size   : 40px;
   
`

export const H3 = styled.h3`
     font-weight : 500;
     font-size   : 3rem;
     ${ff}

`


export const BodyIntro = styled.p`
     font-weight : 500;
     font-size   : 24px;
     line-height : 140%;
`


export const LargeText = styled.p`
     font-weight : normal;
     font-size   : 2.8rem;
     line-height : 140%;
`


export const MediumText = styled.p`
     font-weight : normal;
     font-size   : 1.7rem;
     line-height : 130%;

`


export const Caption = styled.p`

     font-weight : 500;
     font-size   : 15px;
     line-height : 18px;
`

export const Caption2 = styled.p`
     font-weight    : 600;
     font-size      : 15px;
     line-height    : 18px;
     text-transform : uppercase;
`


export const SmallText = styled.p`
     font-weight : normal;
     font-size   : 13px;
     line-height : 130%;
`

export const MediumSpan = styled.span`
     font-weight : 300;
     font-size   : 1rem;
     font-family  : 'Raleway', sans-serif;
     line-height : 130%;
`

