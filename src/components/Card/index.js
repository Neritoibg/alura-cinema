import { useFavoritosContext } from "Context/Favoritos"
import styles from "./Card.module.css"
import IconFavorito from "./IconFavorito.png"
import IconNoFavorito from "./IconNoFavorito.png"
import { Link } from "react-router-dom"

function Card({id, capa, titulo}){

const {favorito, agregarFavorito}= useFavoritosContext()
const isFavorito = favorito.some(fav=> fav.id === id)
const icon = isFavorito ? IconFavorito : IconNoFavorito


    return(
        <div className={styles.container}>
            <Link className={styles.linl} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            </Link>
            <img 
            src={icon} 
            alt="Icono Favorito" 
            onClick={()=> agregarFavorito({id, titulo, capa})}
            /> 
        </div>
        
    )

}

export default Card