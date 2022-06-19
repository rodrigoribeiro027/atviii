import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Consumos from "./Consumo/Consumos";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import Clientes from "./listagem/Clientes/Clientes";
import Servicos from "./listagem/Servicos/Servicos";
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }
    

    const construirView = () => {

        if (tela === 'listaClientes') {
            return (
                <>
                    <ListaClientes tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Cadastros') {
            return (
                <>
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Clientes') {
            return (
                <>
                    <Clientes tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Servicos') {
            return (
                <>
                    <Servicos tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Consumos') {
            return (
                <>
                    <Consumos tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}