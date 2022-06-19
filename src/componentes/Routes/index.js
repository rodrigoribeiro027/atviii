import { Routes,Route } from "react-router-dom";
import EditCliente from "../Atualizar/Clientes/editCliente";
import EditProduto from "../Atualizar/Produtos/editProduto";
import EditServico from "../Atualizar/Servicos/editServico";
import ConsumoCli from "../Consumo/ConsumoCli";
import Consumos from "../Consumo/Consumos";
import FormularioCadastroCliente from "../formularioCadastroCliente";
import ListaClientes from "../listaClientes";
import Clientes from "../listagem/Clientes/Clientes";
import Produtos from "../listagem/Produtos/Produtos";
import Servicos from "../listagem/Servicos/Servicos";



export default function Rotas(){
    return(
        <Routes>
            <Route path="/TOP-Clientes" element={<ListaClientes tema="purple lighten-4"/>} />
            <Route path="/" element={<ListaClientes tema="purple lighten-4"/>} />
            <Route path="/Cadastros" element={<FormularioCadastroCliente tema="purple lighten-4"/>} />
            <Route path="/Clientes" element={<Clientes tema="purple lighten-4"/>} />
            <Route path="/Produtos" element={<Produtos tema="purple lighten-4"/>} />
            <Route path="/Servicos" element={<Servicos tema="purple lighten-4"/>} />
            <Route path="/Consumos" element={<Consumos tema="purple lighten-4"/>} />
            <Route path="/Consumo" element={<ConsumoCli tema="purple lighten-4"/>} />
            <Route path="/editCliente" element={<EditCliente tema="purple lighten-4"/>} />
            <Route path="/editProduto" element={<EditProduto tema="purple lighten-4"/>} />
            <Route path="/editServico" element={<EditServico tema="purple lighten-4"/>} />
        </Routes>
    )
}