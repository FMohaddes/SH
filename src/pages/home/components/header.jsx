import React from 'react'
import styled from "styled-components";

function Header() {
     return (
          <$HeaderWrapper >
               <$BoxWrapper />
               <$Box >
                    <$BGVideo >
                         <video autoPlay muted loop >
                              <source src = { "/images/homePage/header.mp4" }
                                   type = "video/mp4" />
                              <source src = { "/images/homePage/header.wbm" }
                                   type = "video/webm" />
                         </video >
                    </$BGVideo >
               
               </$Box >
          </$HeaderWrapper >
     );
}

export default Header;

const $HeaderWrapper = styled.header`
     grid-column           : 1/-1;
     background            : ${ p => p.theme.GREY_DARK_2 };
     height                : 76vh;
     display               : grid;
     grid-template-columns :minmax(3rem, 8rem) 1fr minmax(3rem, 8rem);


`
const $BoxWrapper = styled.div`
     background    : ${ p => p.theme.GREY_DARK_2 };
     grid-column   : 2/3;
     height        : 112%;
     grid-row      : 1/2;
     border-radius : 4.3rem;
`
const $Box = styled.div`
     grid-row              : 1/2;
     grid-column           : 2/3;
     position              : relative;
     background            : linear-gradient(to right bottom,
     hsla(150, 100%, 50%, .44), hsla(150, 100%, 50%, 1));
     height                : 112%;
     display               : grid;
     grid-template-columns :min-content 1fr 60% 1fr min-content;
     grid-template-rows    :min-content min-content 1fr repeat(3, min-content);
     grid-gap              : 3rem;
     border-radius         : 4rem;
`
const $BGVideo = styled.div`
     position : absolute;
     top      : 0;
     left     : 0;
     height   : 100%;
     width    : 100%;
     z-index  : 1;
     opacity  : .18;

     video {
          height        : 100%;
          width         : 100%;
          object-fit    : cover;
          border-radius : 4rem;

          }
`
