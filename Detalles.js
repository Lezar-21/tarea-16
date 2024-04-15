import { API_URL } from "./App.js"
import PeliculaCard from "./PeliculaCard.js"
import getElemento from "./lib/getElemento.js"


const Detalles = () =>{
    let id;
    const { search } = document.location
    const urlparams = new URLSearchParams(search)
    urlparams.has('id') ? id = urlparams.get('id') || null : id = null

    const buscarPeliculas = async (id) => {
        let data = null
        const response = await fetch(`${API_URL}/${id}`)
        if (response.ok) 
            data = await response.json()
        const resultado = await getElemento('.resultados')
        resultado.innerHTML = dibujaPeliculas(data)
    }

    const dibujaPeliculas = (pelicula)=>{
        return `
            ${(pelicula !== null)
                ? `
                    <div class="container">
                        ${PeliculaCard(pelicula)}
                        <div class="desc">${pelicula.sinopsis}</div>
                    </div>
                ` :
               `
                    <div class="empty">
                        <h2>No hay peliculas encontradas.</h2>
                    </div>
                `
            }
            `
    }
    buscarPeliculas(id)
    return `
        <div class="resultados"></div>
    `
}

export default Detalles
