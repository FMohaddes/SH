import React , { lazy , Suspense , useState } from "react";
import { Route , Switch , useLocation } from "react-router-dom";
import Spinner from "./components/utils/spinner";
import ErrorBoundary from "./components/dev/error-boundary";
import Navbar from "./components/layout/navbar";
import PrimaryTheme from "./styles/themes/primary-theme";
import DarkTheme from "./styles/themes/secondary-theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global/global";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/dev/scroll-to-top";
import Footer from "./components/layout/footer";

const HomePage = lazy( () => import("./pages/home/home-page") )

function App() {
     const [ theme , setTheme ] = useState( {
          current : PrimaryTheme ,
          setCurrent : () => {
               setTheme( ( { current } ) => ({
                         ...theme ,
                         current : current.id === "light" ? DarkTheme : PrimaryTheme
                    })
               )
               
          }
          
     } );
     
     const location = useLocation()
     return (
          
          < >
               <ThemeProvider theme = { { ...theme.current , ...theme } } >
                    <GlobalStyle />
                    <Navbar />
                    <AnimatePresence exitBeforeEnter >
                         {/*<ScrollToTop/>*/ }
                         <Switch location = { location } key = { location.pathname } >
                              <ErrorBoundary >
                                   <Suspense fallback = { <Spinner /> } >
                                        <Route exact path = "/" component = { HomePage } />
                                   </Suspense >
                              </ErrorBoundary >
                         </Switch >
                         <Footer />
                    </AnimatePresence >
               
               </ThemeProvider >
          < />
     
     );
}

export default App;
