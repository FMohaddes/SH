import React from 'react'
import styled from "styled-components";
import Slideshow from "../../../components/HOC/slideshow/slideshow";
import StoryCard from "../../../components/cards/story/story-card";


const StoryCarousel = Slideshow( StoryCard )


function Stories() {
     const [ state , setState ] = React.useState( {
          users : [] ,
     } )
     React.useEffect( () => {
          const fetchFunc = async () => {
               const res = await fetch( 'https://randomuser.me/api/?results=6' )
               const resJson = await res.json();
               setState( { ...state , users : resJson } )
          }
          fetchFunc();
     } , [] );
     return (
          <$StoriesWrapper >
               {
                    state.users.results ?
                         <StoryCarousel items = { state.users.results } SlidesNumber = { 1 }
                              single dots={true} />
                         : []
               }
          
          </$StoriesWrapper >
     );
}

export default Stories;

const $StoriesWrapper = styled.section`
     grid-column           : 1/-1;
     background            : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.PRIMARY_O },
     ${ p.theme.PRIMARY_DARK }),url(/images/homePage/header.jpg)` };
     background-size       : cover;
     background-attachment : fixed;
     padding               : 9rem 6rem;
     display               : grid;
     
`
