import styled from "styled-components";
import { ReactComponent as CurvyShape } from "../assets/graphics/curvy-shape.svg";

export const $CurvyShape = styled( CurvyShape )`
     width    : 100%;
     height   : 100%;
     position : absolute;
     top      : 0;
     left     : 0;
     fill:${p => p.theme.SECONDARY};

`

export const $CurvyShape2 = styled( CurvyShape )`
     width    : 200%;
     height   : 180%;
     position : absolute;
     top      : 0;
     left     : 0;
     fill:${p => p.theme.SECONDARY_S};


`
