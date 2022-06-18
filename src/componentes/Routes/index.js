import { Routes,Route } from "react-router-dom";
import FormularioCadastroCliente from "../formularioCadastroCliente";
import ListaClientes from "../listaClientes";


export default function Rotas(){
    return(
        <Routes>
            <Route path="/Top-rank" element={<ListaClientes tema="purple lighten-4"/>} />
            <Route path="/Cadastros" element={<FormularioCadastroCliente tema="purple lighten-4"/>} />
        </Routes>
    )
}