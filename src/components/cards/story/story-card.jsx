import React from 'react'
import styled from "styled-components";


function StoryCard( { name , picture } ) {
     const { first , last } = name;
     const { large } = picture
     return (
          <$StoryCard >
               <$Info >
                    <$Shape >
                         <img src = { large } alt = "Person on a tour" />
                    </$Shape >
                    <h3 >{ first }
                         <span >{ last }</span ></h3 >
                    <p >2020/10/13</p >
               </$Info >
               <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                    ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum
                    sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis
                    earum qui. sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis
                    earum qui. sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis
                    earum qui. sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis
                    earum qui.
               </p >
          
          </$StoryCard >
     );
}

export default StoryCard;

const $StoryCard = styled.div`
     width                 : 88rem;
     height                : 24rem;
     border-radius         : 2rem;
     background-color      : ${ p => p.theme.GREY_LIGHT };
     padding               : 3rem;
     display               : grid;
     grid-template-columns : 11rem 1fr;
     position              : relative;
     overflow              : hidden;
     margin                : 2rem 3rem;
     align-items           : center;
     box-shadow    : 0 .5rem .5rem rgba(0, 0, 0, 0.25),
     0 .5rem .5rem 0.5px rgba(255, 255, 255, 0.2);

     p {
          grid-row    : 2/3;
          grid-column : 1/3;
          
          }

     &::before {
          line-height : 1;
          font-family : sans-serif;
          z-index     : 11;
          content     : "“";
          position    : absolute;
          top         : -3rem;
          right       : -.5rem;
          font-size   : 25rem;
          color       : ${ p => p.theme.GREY_LIGHT_2 };
          }

     @media only screen and (max-width : 50em) {
          width : 55rem;
          margin-left: -15rem;
          }
`
const $Info = styled.div`
     grid-row    : 1/2;
     grid-column : 1/-1;

     h3 {
          margin    : 1.7rem 9rem 0;
          padding   : 0 1rem 1rem;
          font-size : 1.8rem;
          @media only screen and (max-width : 50em) {
               font-size : 1.2rem;
               margin    : 2rem 6rem 0;
               padding   : 0 2rem 1rem;
               }
          }

     p {
          margin    : 0 9rem 0;
          padding   : 0 1rem 0;
          font-size : 1rem;
          @media only screen and (max-width : 50em) {
               font-size : .8rem;
               margin    : 0 7rem 0;
               padding   : 0 .5rem 0;
               }

          }
`

const $Shape = styled.figure`
     float                 : left;
     -webkit-shape-outside : circle(50% at 50% 50%);
     shape-outside         : circle(50% at 50% 50%);
     clip-path             : circle(50% at 50% 50%);
     position              : relative;

     img {
          width               : 9rem;
          height              : 100%;
          backface-visibility : hidden;
          transition          : all .5s;
          @media only screen and (max-width : 50em) {
               width: 7rem;
               }
          }


`

