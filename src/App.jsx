
import "./global.css";
import background from './assets/padrao-gatwurno.png'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Produtos } from "./components/Produtos";
import { TelaCart } from "./components/telaCart";


export default function App() {
  return (
    <>
   
    <div style={{
      backgroundImage: `url(${background})`,
      width: '100%' ,
      height: '100%',
    
      }}>
      <BrowserRouter>
        <Routes>
            <Route >
                <Route index element={<Produtos/>} path="/" />
                <Route element={<TelaCart/>} path="/carrinho" />

            </Route>
        </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}
