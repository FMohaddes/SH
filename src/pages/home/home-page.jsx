import React from 'react'
import styled from "styled-components";
import Header from "./components/header";
import { PageAnimation } from "../../styles/animations/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
     return (
          <motion.div variants = { PageAnimation } initial = "hidden" animate = "show" >
               
               <$HomePageGrid >
                    <Header />
               </$HomePageGrid >
          </motion.div >
     );
}

export default HomePage;


export const $HomePageGrid = styled.div`
     display               : grid;
     grid-template-columns :minmax(3rem, 8rem) 1fr minmax(3rem, 8rem);
     grid-template-rows    : 1fr 55vh 44vh 66vh 66vh 55vh 70vh  1fr;
     grid-row-gap          : 5rem;
     grid-column-gap       : 1rem;
     overflow              : hidden;
     position              : relative;
     >*{
          :nth-child(2){
               height: 200rem;
               }
          }
    
`
