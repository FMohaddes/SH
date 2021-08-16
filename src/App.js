import React , { lazy , Suspense , useState } from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/ErrorBoundary/error-boundary";
import Navbar from "./components/layout/navbar";
import PrimaryTheme from './styles/themes/primary-theme';
import DarkTheme from './styles/themes/secondary-theme';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/global";

const HomePage = lazy( () => import("./pages/home/home-page") )

function App() {
     const [ theme , setTheme ] = useState( PrimaryTheme );
     
     return (
          
          < >
               <ThemeProvider theme = { { ...theme , setTheme : () => {
                         setTheme( theme => theme.id === 'light' ? DarkTheme : PrimaryTheme );
                    }
               } } >
                    <GlobalStyles/>
                    <Switch >
                         <ErrorBoundary >
                              <Suspense fallback = { <Spinner /> } >
                                   <Navbar />
                                   <Route exact path = '/' component = { HomePage } />
                              </Suspense >
                         </ErrorBoundary >
                    </Switch >
                    
               </ThemeProvider >
          < />
     
     );
}

export default App;
