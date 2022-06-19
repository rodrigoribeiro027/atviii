import 'materialize-css/dist/css/materialize.min.css'

export default function ConsumoCli (props) {
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Serviços
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
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="center">
                        Produtos
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome Produto</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Shampoo</td>
                                <td>10</td>
                                <td>deluxe</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
}