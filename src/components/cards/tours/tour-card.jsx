import React from "react"
import styled from "styled-components";
import { H3 } from "../../../styles/global/typography";
import { ReactComponent as Star } from "../../../assets/icons/star.svg";
import { Link } from "react-router-dom";

function TourCard( { title , image , capacity , hotel , rating , days , price } ) {
     const [ state , setState ] = React.useState( [] )
     const stars = []
     const tourStar = () => {
          for ( let i = 1 ; i <= 5 ; i++ ) {
               if ( i <= rating )
                    stars.push( { id : i , fill : true } )
               else
                    stars.push( { id : i , fill : false } )
          }
          return stars
     }
     React.useEffect( () => {
          setState( tourStar )
     } , [] );
     
     
     return (
          <$TourCard >
               <$Img src = { image } />
               <$TextBox >
                    <H3 >{ title }</H3 >
                    <span >
                         { hotel }
                    </span >
                    <span >
                         { price } $
                    </span >
                    <span >
                         { capacity } people
                    </span >
                    <span >
                         { days } days
                    </span >
               
               </$TextBox >
               <$More >
                    
                    <$Rating >
                         { state.map( ( { fill , id } ) =>
                              <$Star key = { id } fill = { fill ? "true" : null } />
                         ) }
                    </$Rating >
                    <$ReadMore to = { "/" } >Read more &rarr;</$ReadMore >
               
               </$More >
          
          </$TourCard >
     );
}

export default TourCard;

const $TourCard = styled.div`
     width         : 35rem;
     height        : 35rem;
     border-radius : 2rem;
     overflow      : hidden;
     display       : grid;
     box-shadow    : 0 .5rem .5rem rgba(0, 0, 0, 0.25),
     0 .5rem .5rem 0.5px rgba(255, 255, 255, 0.2);
     margin        : 2rem 3rem;

`
const $Img = styled.div`
     grid-column         : 1/-1;
     grid-row            : 1/2;
     background-image          : ${ ( { src } ) => `url(${ src })` };
     background-size     : cover;
     background-position : 20% 50%;
     width               : 85%;
     height              : 30rem;
     justify-self        : end;
     object-fit          : cover;
     //transform     : translateX(5rem);
     transition          : 1s all;
     z-index             : 33;

     :hover {
          background-position : -20% 50%;

          }
`


const $TextBox = styled.div`
     display         : grid;
     justify-content : start;
     align-content   : start;
     grid-column     : 1/-1;
     height          : 30rem;
     color           : ${ p => p.theme.GREY_DARK_2 };
     grid-row        : 1/2;
     padding         : 3rem 0 0 3rem;
     z-index         : 44;
     clip-path       : polygon(-50% -20%, 65% 0%, 35% 100%, 0% 100%);
     background      : ${ p => p.theme.WHITE };
     //backdrop-filter : blur(1rem);
     span {
          shape-outside : polygon(0% -20%, 75% 0%, 10% 100%, 0% 100%);
          }

     > * {
          font-size : 1.5rem;

          :nth-child(1) {
               font-size   : 3.5rem;
               font-family : 'Raleway', sans-serif;
               font-weight : 800;
               }
          }
`

const $More = styled.div`
     background      : ${ p => p.theme.GREY_DARK_2 };
     grid-column     : 1/-1;
     display         : flex;
     grid-row        : 2/3;
     height          : 8rem;
     padding         : 3rem 2.5rem 0;
     margin-top      : -3rem;
     justify-content : space-between;
     justify-items   : center;
     align-items     : center;

`

const $Rating = styled.div`
     display : flex;
`
const $Star = styled( Star )`
     width        : 2.5rem;
     height       : 2.5rem;
     justify-self : end;
     align-self   : end;
     fill         : ${ p => p.fill ? `${ p.theme.TERTIARY }`
          : `${ p.theme.WHITE }` };
`

const $ReadMore = styled( Link )`
     &:link,
     &:visited {
          color       : ${ p => p.theme.WHITE };
          margin-top  : .5rem;
          font-weight : 800;
          font-size   : 1.5rem;

          &:hover {
               color : ${ p => p.theme.TERTIARY };

               }

          &:active {
               }
          }
`
