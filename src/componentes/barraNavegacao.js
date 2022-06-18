/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from 'react-router-dom'

export default function BarraNavegacao(props) {

    const gerarListaBotoes = () => {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map(valor =>
                <li key={valor}><Link to = {valor} >{valor}</Link></li>
            )
            return lista
        }
    }

    return (
        <>
            <nav className={props.tema}>
                <div className="nav-wrapper">
                    <a className="brand-logo">WB</a>
                    <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    )
}