
import imgHome from '../../assets/homeImg.png'
import './styel.css'

const Home = () => {
 
    return(
        <>
            <div className="titleHome">
                Bem Vindo ao seu organizador de tomada de decisões! 
            </div>
            <div className="imageHome">
                <img className="imgHome" alt='homeimg' src={imgHome} />
            </div>
        </>
    )
}

export default Home