import {API_URL} from './App.js'
import getElemento from './lib/getElemento.js'
import PeliculaCard from './PeliculaCard.js'

const Home = () =>{
    const buscarPeliculas = async (titulo) =>{
        const response = await fetch(`${API_URL}?s=${titulo}`)
        const data = await response.json()

        const resultado = await getElemento('.resultados')
        resultado.innerHTML = dibujaPelicula(data)
    }
    const dibujaPelicula = (pelicula) =>{
        return `
            ${pelicula?.length > 0
                ?`
                    <div class="container">
                        ${pelicula.map((pelicula) => PeliculaCard(pelicula)).join('')}
                    </div>
                `:
                `
                    <div class="empty">
                        <h2>No hay peliculas encontradas.</h2>
                    </div>
                `

            }
        `
    }

    const botonBuscar = async ()=>{
        const buscar = await getElemento('#imgBuscar')
        buscar.addEventListener('click',(e)=>{
            const searchTherm = document.querySelector('#txtBuscar').value
            buscarPeliculas(searchTherm)
        })
    }

    buscarPeliculas('')
    botonBuscar()
    return `
        <div class="search">
            <input id="txtBuscar" placeholder="Buscar pelicula por titulo" />
            <img id="imgBuscar" src="search.svg" alt="buscar"/>
        </div>
        <div class="resultados"></div>
    `
}




export default Home