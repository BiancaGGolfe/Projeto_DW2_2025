import React from "react";
// import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from '../paginas/index.jsx';
import Carro from '../paginas/carro.jsx';


export default function Links() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/carro/:id" element={<Carro />} />
            </Routes>
        </BrowserRouter>
    )

}