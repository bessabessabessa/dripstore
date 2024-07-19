import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home"
import Cadastro from "../Pages/Cadastro"

function Routes() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routes();