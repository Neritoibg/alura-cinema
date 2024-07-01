import FavoritosProvider from "Context/Favoritos"
import Container from "components/Container"
import Pie from "components/Pie"
import Cabecera from "components/cabecera/Cabecera"
import { Outlet } from "react-router-dom"

function PaginaBase (){
    return(
        <main>
            <Cabecera/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Pie/>
        </main>
    )
}

export default PaginaBase