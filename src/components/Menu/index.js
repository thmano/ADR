import { Link } from 'react-router-dom'
import './style.css'

const Menu = () => {
    return(
        <div className="menu">
            <ul className='list'>
                <li>  
                    <Link to="/" className='link'> 
                        Inicio
                    </Link>
                </li>
                <li>  
                    <Link to="/New" className='link'> 
                        Novo
                    </Link>
                </li>
                <li>  
                    <Link to="/History" className='link'> 
                        Historico
                    </Link>
                </li>      
            </ul>

        </div>
    )

}
export default Menu