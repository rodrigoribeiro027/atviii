export default function FormularioCadastroCliente(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
        
    return (
        <>
            <h3 className="center">Cadastros</h3>
            <div className="row">
                <form className="col s12 box1">
                    <div className="row">
                        <h2 className="center">Cadastro Cliente</h2>
                        <div className="input-field col s6">
                            <input id="Nome"  type="text" />
                            <label htmlFor="Nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Nome Social" type="text"  />
                            <label htmlFor="Nome Social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="RG" type="text" />
                            <label htmlFor="RG">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="CPF" type="text"  />
                            <label htmlFor="CPF">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text"  />
                            <label htmlFor="telefone">telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="text"  />
                            <label htmlFor="email">e-mail</label>
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
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Cadastro Produto</h2>

                            <div className="input-field col s6">
                                <input id="Produto" type="text" />
                                <label htmlFor="Produto">Nome Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Preço" type="text"/>
                                <label htmlFor="Preço">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Codigo do Produto" type="text"/>
                                <label htmlFor="Codigo do Produto">Codigo do Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Descrição do produto" type="text" />
                                <label htmlFor="Descrição do produto">Descrição do produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="categoria"  type="text" />
                                <label htmlFor="categoria">Categoria</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Quantidade" type="text" />
                                <label htmlFor="Quantidade">Quantidade</label>
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
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Cadastro Serviço</h2>
                            <div className="input-field col s6">
                                <input id="nome Servico"  type="text" />
                                <label htmlFor="nome Servico">Nome Servico</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="preço"  type="text"  />
                                <label htmlFor="preço">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Descricao" type="text"  />
                                <label htmlFor="Descricao">Descrição</label>
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