import React from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";

function Wave() {
     return (
          <WaveSvg viewBox = "0 0 721 117" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
               <motion.path initial = { { pathLength : 0 , pathOffset : 1 } }
                    animate = { { pathLength : 1 , pathOffset : 0 } } transition = { { duration : 5 } }
                    d = "M3 116C14.6667 46 145.8 -42 297 30C512 127 654 84 719 39"
                    stroke = "url(#paint0_linear)" stroke-width = "15" />
               <defs >
                    <linearGradient id = "paint0_linear" x1 = "359.5" y1 = "-25.9819" x2 = "359.5" y2 = "116"
                         gradientUnits = "userSpaceOnUse" >
                         <stop stopColor = "#C10840" />
                         <stop offset = "1" stopColor = "#853131" stopOpacity = "0" />
                    </linearGradient >
               </defs >
          </WaveSvg >
     );
}

export default Wave;

const WaveSvg = styled.svg`
     width    : 100%;
     height   : 100%;
     position : absolute;
     top      : 0;
     left     : 0;

`