const PeliculaCard = (pelicula) => {
    return `
    <div class="movie">
        <div>
            <p>${pelicula.anio}</p>
        </div>
        <div>
            <a href="detalles.html?id=${pelicula.peliculaid}">
                <img src="${pelicula.poster !== 'Sin poster' ? pelicula.poster : 'https://via.placeholder.com/400'}" alt="${pelicula.titulo}" />
            </a>
        </div>
        <div>
            <span>PELICULA</span>
            <h3>${pelicula.titulo}</h3>
        </div>
    </div>
    `
}

export default PeliculaCard

