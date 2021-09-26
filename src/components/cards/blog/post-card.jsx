import React , { useState } from 'react'
import styled from "styled-components";
import { Caption , H3 , H4 , LargeText , SmallText } from "../../../styles/global/typography";
import { Link } from "react-router-dom";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";


function PostCard( { title , image , tag , date , comment , context } ) {
     
     return (
          <$PostCardGrid >
               <img src = { image } alt = "" />
               <$TextBox >
                    <H4 >{ tag }</H4 >
                    <Caption >{ title }</Caption >
                    <SmallText >{ context.substr( 1 , 88 ) + " ..." }
                    
                    </SmallText >
                    <$ReadMore to = { "/" } >Read more &rarr;</$ReadMore >
                    <$DateAndComment >
                         <$Date >
                              <$Calendar />
                              <p >{ date }</p >
                         </$Date >
                         <$User >
                              { comment.slice( 0 , 4 ).map( ( { image , id } ) =>
                                   <img key = { id } src = { image } alt = { title } />
                              )
                              }
                         </$User >
                    </$DateAndComment >
               </$TextBox >
          
          </$PostCardGrid >
     );
}

export default PostCard;


const $PostCardGrid = styled.div`
     height                : 27rem;
     display               : grid;
     grid-template-columns : 1fr 1fr;
     overflow              : hidden;
     background            : ${ p => p.theme.GREY_LIGHT };
     text-align            : left;
     align-items           : start;
      background:white;
     img {
          grid-column : 1/2;
          width       : 100%;
          height      : 27rem;
          object-fit  : cover;

          }
`

const $TextBox = styled.div`
     padding  : 2rem 2rem 0 3rem;
     display  : grid;
     grid-gap : 1.5rem;

     h4 {
          color     : ${ p => p.theme.GREY };
          font-size : 1.5rem;
          font-style:italic;
          }

     > * {
          :nth-child(2) {
               font-weight : 800;
               }
          }
`
const $ReadMore = styled( Link )`
     &:link,
     &:visited {
          color           : ${ p => p.theme.TERTIARY };
          display         : inline-block;
          text-decoration : none;
          font-weight     : 800;
          font-size       : 1.2rem;

          &:hover {
               color : ${ p => p.theme.GREY_DARK };
               }

          &:active {
               }
          }
`

const $DateAndComment = styled.div`
     display         : flex;
     justify-content : space-between;
     justify-items   : end;
     align-items     : center;

`
const $Date = styled.div`
     display       : flex;
     justify-items : center;
     align-items   : center;
`


const $Calendar = styled( Calendar )`
     margin-right : .5rem;
     width        : 2rem;
     height       : 2rem;
     justify-self : end;
     align-self   : end;
     fill         : ${ p => p.theme.GREY };
`
const $User = styled.div`
     display : flex;
     img {
          box-sizing    : content-box;
          width         : 2.5rem;
          height        : 2.5rem;
          border-radius : 50%;
          border        : 3px solid #FFF;

          &:not(:last-child) {
               margin-right : -1.5rem;

               }
`
