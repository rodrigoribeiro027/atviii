import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";

export default function Produtos (props) {
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Produtos
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shampoo</td>
                                <td>10</td>
                                <td>cabelo liso</td>
                                <td>Limpeza capilar</td>
                                <td>10</td>
                                <td className="espaço">
                                    <Link to = "/editProduto">
                                        <i className="material-icons espaço1">edit</i>
                                    </Link>
                                    <Link to = "/">
                                        <i className="material-icons espaço1 ">delete</i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Shampoo</td>
                                <td>10</td>
                                <td>cabelo liso</td>
                                <td>Limpeza capilar</td>
                                <td>10</td>
                                <td className="espaço">
                                    <Link to = "/editProduto">
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