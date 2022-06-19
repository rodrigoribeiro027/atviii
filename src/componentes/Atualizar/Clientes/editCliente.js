import 'materialize-css/dist/css/materialize.min.css'

export default function EditCliente (props){

        let estiloBotao = `btn waves-effect waves-light ${props.tema}`
        return (
            <>
            <div className="row">
                <form className="col s12 box1">
                    <div className="row">
                        <h2 className="center">Editar Cliente</h2>
                        <div className="input-field col s6">
                            <input id="Nome" type="text" className="validate" />
                            <label htmlFor="Nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Nome Social" type="text" className="validate" />
                            <label htmlFor="Nome Social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="RG" type="text" className="validate" />
                            <label htmlFor="RG">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="CPF" type="text" className="validate" />
                            <label htmlFor="CPF">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-mail</label>
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