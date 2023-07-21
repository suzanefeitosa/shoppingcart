import React from "react";
import {  BrowserRouter, Routes, Route  } from "react-router-dom";

import { Produtos } from "./Produtos";
import { TelaCart } from "./telaCart";

export function Routes() {
  return (
    <BrowserRouter>
        <Routes>
        <Route index element={Produtos} path="/" >
            <Route element={TelaCart} path="/carrinho" />
        </Route>
        </Routes>
    </BrowserRouter>
   
  );
}
