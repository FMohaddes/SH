import React , { lazy , Suspense , useState } from "react";
import { BrowserRouter , Route , Switch , useLocation } from "react-router-dom";
import Spinner from "./components/dev/spinner";
import ErrorBoundary from "./components/dev/error-boundary";
import Navbar from "./components/layout/navbar";
import PrimaryTheme from './styles/themes/primary-theme';
import DarkTheme from './styles/themes/secondary-theme';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/global";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/dev/scroll-to-top";

const HomePage = lazy( () => import("./pages/home/home-page") )

function App() {
     const [ theme , setTheme ] = useState( PrimaryTheme );
     const location = useLocation()
     
     return (
          
          < >
               <ThemeProvider theme = { {
                    ...theme , setTheme : () => {
                         setTheme( theme => theme.id === 'light' ? DarkTheme : PrimaryTheme );
                    }
               } } >
                    <GlobalStyles />
                    <AnimatePresence exitBeforeEnter >
                         {/*<ScrollToTop/>*/}
                         <Navbar />
                         <Switch location = { location } key = { location.pathname } >
                              <ErrorBoundary >
                                   <Suspense fallback = { <Spinner /> } >
                                        <Route exact path = '/' component = { HomePage } />
                                   </Suspense >
                              </ErrorBoundary >
                         </Switch >
                    </AnimatePresence >
               
               </ThemeProvider >
          < />
     
     );
}

export default App;
