import React from 'react'
import Slider from "react-slick"
import styled from "styled-components";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Slideshow = WrapperComponent => ( { SlidesNumber , items , dots } ) => {
     
     const settings = {
          dots           : dots ,
          infinite       : true ,
          speed          : 500 ,
          slidesToShow   : SlidesNumber ,
          slidesToScroll : 1 ,
          responsive     : [
               {
                    breakpoint : 980 ,
                    settings   : {
                         slidesToShow   : SlidesNumber - 1 ,
                         slidesToScroll : 1 ,
                         dots           : dots
                    }
               } ,
               {
                    breakpoint : 800 ,
                    settings   : {
                         slidesToShow   : SlidesNumber - 2 ,
                         slidesToScroll : 1 ,
                         initialSlide   : 2
                    }
               } ,
               {
                    breakpoint : 480 ,
                    settings   : {
                         slidesToShow   : SlidesNumber - 2 ,
                         slidesToScroll : 1
                    }
               }
          ]
     };
     return (
          <$StyledSlider dots = { dots } >
               <Slider { ...settings }>
                    { items.map( ( { id , ...otherprops } ) =>
                         <WrapperComponent key = { id } { ...otherprops } /> )
                    }
               </Slider >
          </$StyledSlider >
     );
}

export default Slideshow;

export const $StyledSlider = styled.div`
       position: relative;
     .slick-slider {
          display : grid;
          .slick-list {
               display        : grid;
               grid-auto-flow : column;
               
               .slick-track {
                    display        : grid;
                    grid-auto-flow : column;
                    
                    }
               }

          .slick-slide {
               float           : none;
               display         : grid;
               grid-auto-flow  : column;
               justify-content : center;
               align-content   : center;
               justify-items   : center;
               align-items     : center;
               
               }
          }

     .slick-dots {
          bottom : -5rem;

          li {
               button {
                    width         : 2rem;
                    height        : 2rem;
                    border-radius : 2rem;

                    &:before {
                         position      : absolute;
                         top           : 50%;
                         left          : 50%;
                         width         : 1rem;
                         height        : 1rem;
                         border-radius : 1rem;
                         content       : '';
                         text-align    : center;
                         color         : ${ p => p.theme.BLACK };
                         opacity       : .5;
                         background    : ${ p => p.theme.WHITE };
                         transform     : translate(-50%, -50%);
                         transition    : all .3s ease-in-out;
                         }
                    }

               &.slick-active, &:hover {
                    button {

                         &:before {
                              background : ${ p => p.theme.TERTIARY };
                              opacity    : 1;
                              }
                         }
                    }
               }
          }

     .slick-prev, .slick-next {
          visibility : ${ p => p.dots ? "hidden" : "visible" };
            position: absolute;
          }

     .slick-next::before {
          content            : '';
          background-color   : ${ p => p.theme.GREY };
          -webkit-mask-image : url('/images/arrow/next_page.svg');
          -webkit-mask-size  : cover;
          height             : 5rem;
          width              : 5rem;
          display            : inline-block;
          }

     .slick-prev::before {
          content            : '';
          background-color   : ${ p => p.theme.GREY };
          -webkit-mask-image : url('/images/arrow/next_page.svg');
          -webkit-mask-size  : cover;
          transform          : scale(-1);
          z-index            : 22;
          height             : 5rem;
          width              : 5rem;
          display            : inline-block;

          }

     .slick-next {
          right : 3vw;
          top   : -10rem;
          }

     .slick-prev {
          left : 3vw;
          top  : -10rem;
          }
`
