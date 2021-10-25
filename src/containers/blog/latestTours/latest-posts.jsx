import React , { useState } from "react"
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
                         state.posts.slice( 0 , 4 ).map( ( { id , ...otherProps } ) =>
                              <PostCard key = { id.toString() } { ...otherProps } /> )
                    }
               </$PostsWrapper >
          </$LatestPostsWrapper >
     );
}

export default LatestPosts;

const $LatestPostsWrapper = styled.section`
     grid-column        : 2/3;
     display            : grid;
     grid-template-rows : min-content 1fr;

`

const $H2 = styled( H2 )`
     display                 : inline-block;
     background              : linear-gradient(to right bottom,
     ${ p => p.theme.GREY_DARK_2 },
     ${ p => p.theme.GREY });
     -webkit-background-clip : text;
     color                   : transparent;
     font-size               : 5rem;

`
const $PostsWrapper = styled.div`
     margin-top            : 3rem;
     display               : grid;
     grid-gap              : 5rem;
     grid-template-columns : repeat(auto-fit, minmax(44rem, 1fr));
`
