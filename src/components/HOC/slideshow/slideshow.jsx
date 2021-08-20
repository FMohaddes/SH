import React from 'react'
import Slider from "react-slick"
import styled from "styled-components";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slideshow = WrapperComponent => ( { SlidesNumber , items } ) => {
     
     const settings = {
          dots           : true ,
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
                         infinite       : true ,
                         dots           : true
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
                         slidesToShow   : SlidesNumber - 3 ,
                         slidesToScroll : 1
                    }
               }
          ]
     };
     return (
          <$StyledSlider >
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

     .slick-slider {
          display         : grid;
          
           .slick-list{
                
                }
          .slick-slide {
               display         : grid;
               grid-auto-flow: column;
               justify-content : center;
               }
          }

     .slick-dots {
          bottom : -2rem;

          li {
               button {
                    width         : 20px;
                    height        : 20px;
                    border-radius : 20px;

                    &:before {
                         position      : absolute;
                         top           : 50%;
                         left          : 50%;
                         width         : 10px;
                         height        : 10px;
                         border-radius : 10px;
                         content       : '';
                         text-align    : center;
                         color         : #000;
                         opacity       : .5;
                         background    : #FFF;
                         transform     : translate(-50%, -50%);
                         transition    : all .3s ease-in-out;
                         }
                    }

               &.slick-active, &:hover {
                    button {

                         &:before {
                              background : tomato;
                              opacity    : 1;
                              }
                         }
                    }
               }
          }

     .slick-prev, .slick-next {
          visibility : hidden;
          }

     //.slick-next::before {
     //     content          : '';
     //     background-color : aqua;
     //     z-index          : 22;
     //     height           : 2rem;
     //     width            : 2rem;
     //     display          : inline-block;
     //
     //     }

     //.slick-prev::before {
     //     content          : '';
     //     background-color : aqua;
     //     z-index          : 22;
     //     height           : 2rem;
     //     width            : 2rem;
     //     display          : inline-block;
     //     }

     .slick-next {
          left : 5rem;
          top  : -5rem;
          }

     .slick-prev {
          left : 0;
          top  : -5rem;

          }
`
