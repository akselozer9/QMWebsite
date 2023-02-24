/* eslint-disable no-unused-vars */
import {CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {useSelector} from "react-redux";
import { useMemo} from "react";
import {themeSettings} from "/Users/akselozer/qmdashboard/qmdashboard/src/theme.js";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./scenes/home/index.jsx";
import Layout from "./scenes/layout/index.jsx";

import ExperimentOne from "./scenes/Exp1/ExperimentOne.js";
import ExperimentTwo from "./scenes/Exp2/ExperimentTwo.js";
import ExperimentThree from "./scenes/Exp3/ExperimentThree.js";
function App(){
    const mode = useSelector((state) => state.global.mode)
   const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])
  
  return (<div className="app"> 
    <BrowserRouter> 
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
            <Route element= {<Layout/>}>
                <Route path="/" element={<Navigate to="/introduction" replace />}/>
                <Route path="/introduction" element={<Home/>}/>

                <Route path="/" element={<Navigate to="/experiment one" replace />}/>
                <Route path="/experiment one" element={<ExperimentOne/>}/>

                <Route path="/" element={<Navigate to="/experiment two" replace />}/>
                <Route path="/experiment two" element={<ExperimentTwo/>}/>

                <Route path="/" element={<Navigate to="/experiment three" replace />}/>
                <Route path="/experiment three" element={<ExperimentThree/>}/>
               
            </Route>
        </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>)
}

export default App;
