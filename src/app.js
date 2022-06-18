import { BrowserRouter } from "react-router-dom";
import BarraNavegacao from "./componentes/barraNavegacao";
import  AppRoutes  from "./componentes/Routes/index";

export const App = () => {
    return (
        <BrowserRouter>
            <BarraNavegacao tema="purple lighten-4" botoes={['Top-rank','Cadastros']}/>
            <AppRoutes />
        </BrowserRouter>
    );
}


