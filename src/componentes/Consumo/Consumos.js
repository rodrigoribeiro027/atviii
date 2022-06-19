
import 'materialize-css/dist/css/materialize.min.css'

export default function Consumos  (props) {

        let estiloBotao = `btn waves-effect waves-light ${props.tema}`
        return (
            <>
            
            <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Consumo Cliente</h2>
                            <div className="input-field col s12">
                                <input id="CPF-Cliente" type="text" />
                                <label htmlFor="CPF-Cliente">CPF-Cliente</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Nome Servico" type="text" className="validate" />
                                <label htmlFor="Nome Servico">Nome Servico</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Nome Produto" type="text" className="validate" />
                                <label htmlFor="Nome Produto">Nome Produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao}  type="submit" name="action">Enviar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>

        )
}