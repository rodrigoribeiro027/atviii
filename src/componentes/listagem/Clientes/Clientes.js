import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";


export default function Clientes (props) {
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Lista de Clientes
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Name Social</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Rodrigo Ribeiro</td>
                                <td>Rodrigo</td>
                                <td>444222333-8</td>
                                <td>55.898.878/85</td>
                                <td>10-9820-2048</td>
                                <td className="espaço">
                                    <Link to = "/Consumo">
                                        <i className="material-icons espaço1">local_grocery_store</i>
                                    </Link>
                                    <Link to = "/editCliente">
                                        <i className="material-icons espaço1">edit</i>
                                    </Link>
                                    <Link to = "/">
                                    <i className="material-icons espaço1 ">delete</i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
}