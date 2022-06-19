import 'materialize-css/dist/css/materialize.min.css'

export default function EditServico (props) {

        let estiloBotao = `btn waves-effect waves-light ${props.tema}`
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Editar Serviço</h2>
                            <div className="input-field col s6">
                                <input id="Nome" type="text" className="validate" />
                                <label htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Preço" type="text" className="validate" />
                                <label htmlFor="Preço">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Descrição" type="text" className="validate" />
                                <label htmlFor="Descrição">Descrição</label>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Enviar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>

        )
}