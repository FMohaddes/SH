import React from 'react'
import styled from "styled-components";
import Header from "./components/header";
import { PageAnimation } from "../../styles/animations/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from "./components/about";
import Features from "./components/features";
import LatestToursSlider from "../../containers/tours/latestToursSlider/latest-tours.slider";
import LatestPosts from "../../containers/blog/latestTours/latest-posts";

function HomePage() {
     return (
          <motion.div variants = { PageAnimation } initial = "hidden" animate = "show" >
               
               <$HomePageGrid >
                    <Header />
                    <About/>
                    <Features/>
                    <LatestToursSlider/>
                    <LatestPosts/>
               </$HomePageGrid >
          </motion.div >
     );
}

export default HomePage;


export const $HomePageGrid = styled.div`
     display               : grid;
     grid-template-columns :minmax(3rem, 8rem) 1fr minmax(3rem, 8rem);
     grid-row-gap          : 18rem;
     grid-column-gap       : 1rem;
     overflow              : hidden;
     position              : relative;
   
`
