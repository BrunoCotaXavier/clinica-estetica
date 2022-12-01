import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import Consulta from "./pages/consulta/Consulta";

const Router = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route  path="/" element = { <Home/> }  exact />
                <Route  path="/sobre" element = { <Sobre/> } />
                <Route  path="/consulta" element = { <Consulta/> } />
            </Routes>
       </BrowserRouter>
   )
}

export default Router;