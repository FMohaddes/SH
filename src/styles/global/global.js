import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
     :root {
          /* : 75em; // 1200px*/
          /*   : 62.5em; // 1000px*/
          /*: 50em; // 800px;*/
          /*  : 37.5em; // 600px;*/
          --base-font-size         : 1.9px;
          --fluid-typography-ratio : 0.6;
          --rem-lg                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1vw);
          --rem-md                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.3vw);
          --rem-sm                 : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.5vw);
          --rem-xsm                : calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1.7vw);

          }

     *,
     *::after,
     ::before {
          padding         : 0;
          margin          : 0;
          box-sizing      : inherit;
          text-decoration : none;
          }

     html {
          /*font-size : 62.5%;*/
          font-size : var(--rem-lg);
          @media only screen and (max-width : 62em) {
               font-size : var(--rem-md);
               }
          @media only screen and (max-width : 50em) {
               font-size : var(--rem-sm);
               }

          @media only screen and (max-width : 37em) {
               font-size : var(--rem-sm);
               }

          }

     body {
          box-sizing   : border-box;
          line-height  : 1.7;
          text-align   : justify;
          text-justify : inter-word;
          background: ${ p => p.theme.GREY_LIGHT};
          font-family  : 'Raleway', sans-serif;
          font-weight  : 400;
          //font-display:swap;
          //@media( prefers-color-scheme:dark){
          //     background:var(--color-Grey-dark-1 );
          //     }
          }
     form ,button , input {
          font-family  : 'Raleway', sans-serif;
          color:inherit;
          font-weight: 500;
          }

     code {
          font-family : source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
          }

     ::selection {
          background-color :  ${ p => p.theme.PRIMARY_DARK};
          color            :${ p => p.theme.WHITE} ;
          }

`
