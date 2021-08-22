import React , { useState } from 'react'
import styled from "styled-components";
import { H2 } from "../../../styles/global/typography";
import { posts_data } from "../posts-data";
import PostCard from "../../../components/cards/blog/post-card";


function LatestPosts() {
     const [ state , setState ] = useState( {
               posts : posts_data
          }
     )
     return (
          <$LatestPostsWrapper >
               <$H2 >Latest Posts</$H2 >
               <$PostsWrapper >
                    {
                         state.posts.slice( 0 , 4 ).map( ( { id , ...otherprops } ) =>
                              <PostCard key = { id } { ...otherprops } /> )
                    }
               </$PostsWrapper >
          </$LatestPostsWrapper >
     );
}

export default LatestPosts;

const $LatestPostsWrapper = styled.section`
     grid-column        : 2/3;
     height             : 66rem;
     display            : grid;
     grid-template-rows : min-content 1fr;
     
`

const $H2 = styled( H2 )`
     background              : ${ p => `linear-gradient(to right bottom,
     ${ p.theme.GREY_DARK },
     ${ p.theme.GREY })` };
     -webkit-background-clip : text;
     color                   : transparent;
     padding                 : 0 2rem 2rem;
`
const $PostsWrapper = styled.div`
     display               : grid;
     grid-template-columns : 1fr 1fr;
     grid-gap              : 3rem;

`
