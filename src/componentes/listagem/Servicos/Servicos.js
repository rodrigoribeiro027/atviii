import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";

export default function Servicos (props) {
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Lista de Serviços Cadastrados
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>NomeServiço</th>
                                <th>preço</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>corte de cabelo</td>
                                <td>10</td>
                                <td>tesoura e maquina</td>
                                <td className="espaço">
                                    <Link to = "/editServico">
                                        <i className="material-icons espaço1">edit</i>
                                    </Link>
                                    <Link to = "/">
                                    <i className="material-icons espaço1 ">delete</i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>corte de cabelo</td>
                                <td>10</td>
                                <td>tesoura e maquina</td>
                                <td className="espaço">
                                    <Link to = "/editServico">
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