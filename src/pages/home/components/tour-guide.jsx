import React from 'react'
import styled from "styled-components";
import { H2 , H4 , SmallText } from "../../../styles/global/typography";
import CustomButton from "../../../components/common/customButtons";
import { ReactComponent as Instagram } from "../../../assets/icons/Instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { Link } from "react-router-dom";

function TourGuide() {
     return (
          <$TourGuideWrapper >
               <$Heading >
                    <$H2 >Our tour guides</$H2 >
                    <SmallText >Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget
                         hendrerit posuere. Nunc urna libero congu</SmallText >
               </$Heading >
               <$InfoWrapper >
                    <$Info >
                         <$Photo >
                              <img src = { "/images/tourguide/sahar.jpg" } />
                              <div >
                                   <$SocialMedia >
                                        <Instagram />
                                   </$SocialMedia >
                                   <$SocialMedia >
                                        <Facebook />
                                   </$SocialMedia >
                                   <$SocialMedia >
                                        <Telegram />
                                   </$SocialMedia >
                              </div >
                         
                         </$Photo >
                         <H4 >Sahar Bakhtiari</H4 >
                         <SmallText >Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi
                              vel, maximus justo. Maecenas mi tortor.</SmallText >
                    </$Info >
                    <$Info >
                         <$Photo >
                              <img src = { "/images/tourguide/fmohaddes.jpg" } />
                              <div >
                                   <$SocialMedia to={{ pathname: "https://instagram.com/fmohaddes" }}
                                        target="_blank">
                                        <Instagram />
                                   </$SocialMedia >
                                   <$SocialMedia >
                                        <Facebook />
                                   </$SocialMedia >
                                   <$SocialMedia to={{ pathname: "https://t.me/FMohaddes" }}
                                        target="_blank">
                                        <Telegram  />
                                   </$SocialMedia >
                              </div >
     
                         </$Photo >
                         
                         <H4 >Fateme Mohaddes</H4 >
                         <SmallText >built by fmohadds ut laoreet mollis. Nunc id tellus finibus, eleifend mi
                              vel, maximus justo. Maecenas mi tortor.</SmallText >
                    </$Info >
                    <$Info >
                         <$Photo >
                              <img src = { "/images/tourguide/hanieh.jpg" } />
                              <div >
                                   <$SocialMedia >
                                        <Instagram />
                                   </$SocialMedia >
                                   <$SocialMedia >
                                        <Facebook />
                                   </$SocialMedia >
                                   <$SocialMedia >
                                        <Telegram />
                                   </$SocialMedia >
                              </div >
     
                         </$Photo >
                         <H4 >Hanieh Yazdian</H4 >
                         <SmallText >Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi
                              vel, maximus justo. Maecenas mi tortor.</SmallText >
                    </$Info >
               </$InfoWrapper >
          </$TourGuideWrapper >
     );
}

export default TourGuide;

const $TourGuideWrapper = styled.section`
     grid-column : 2/3;
     display     : grid;
     grid-gap    : 5rem;
`

const $Heading = styled.div`
     grid-row       : 1/2;
     display        : flex;
     flex-direction : column;
     width          : 55rem;
     text-align     : center;
     align-self     : center;
     justify-self   : center;
`
const $H2 = styled( H2 )`
     display                 : inline-block;
     background              : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.GREY_DARK_2 },
     ${ p.theme.GREY })` };
     -webkit-background-clip : text;
     color                   : transparent;
     font-size               : 5rem;

`
const $InfoWrapper = styled.div`
     grid-column           : 1/-1;
     grid-row              : 2/3;
     display               : grid;
     grid-template-columns : repeat(auto-fit, minmax(33rem, 1fr));
     grid-gap              : 5rem;
     text-align            : center;


`
const $Info = styled.div`
     display        : flex;
     flex-direction : column;
     height         : 33rem;
     align-items    : center;
 h4{
      margin: 1.2rem;
      color:${p => p.theme.GREY_DARK_2};
      }
`

const $Photo = styled.div`
     border-radius : 50%;
     width         : 25rem;
     height        : 25rem;
     overflow      : hidden;
     display       : grid;
     border:.6rem solid ${ p => p.theme.PRIMARY_LIGHT };
     
     img {
          grid-column : 1/2;
          grid-row    : 1/2;
          width       : 25rem;
          height      : 25rem;
          object-fit  : cover;
          transition  : 1s all ease-out;
          }

     &:hover img {
          transform : scale(1.1);
          filter    : blur(.1rem) brightness(80%);

          }

     div {
          grid-column     : 1/2;
          grid-row        : 1/2;
          z-index         : 22;
          display         : grid;
          grid-auto-flow  : column;
          grid-column-gap : 1rem;
          justify-content : center;
          justify-self    : center;
          align-self      : center;
          
          }
     &:hover *{
          opacity: 1;
          }

`
const $SocialMedia = styled( Link )`
     width         : 4.5rem;
     height        : 4.5rem;
     background    : ${ p => p.theme.WHITE };
     border-radius : 50%;
     opacity: 0;
      display: flex;
     justify-content: center;
     align-items: center;
     transition  : 1s all ease-out;

     > * {
          width  : 3rem;
          height : 3rem;
          }
`
