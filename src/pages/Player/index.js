import Banner from "components/Banner"
import styles from "./Player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom"
import NoFound from "pages/NoFound"
import { useEffect, useState } from "react"

function Player() {
    const[video, setVideo] = useState([])
   
    const parametros = useParams()
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/Neritoibg/Neritoibg-alura-cinema-api-nerito/videos?id=${parametros.id}`)
        .then(response=> response.json())
        .then(data =>{
            setVideo(...data)
        })
    },[])

    //const video = videos.find((video) => video.id === Number(parametros.id))
    if(!video) return <NoFound/>
    return (
        <>
            <Banner img="player" color="#58b94e" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe width="100%" height="100%"
            src={video.link} 
            title={video.titulo}
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </>

    )
}

export default Player