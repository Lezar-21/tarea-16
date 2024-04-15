import Layout from "./Layout.js"
import Home from "./Home.js"
import Detalles from "./Detalles.js"
import NotFound from "./NotFound.js"
// Componente principal
const API_URL = 'http://localhost:3000/api/peliculas'
const App = () => {
    let contenido;
    // Obtiene las partes del URL
    const { pathname, search } = document.location
    const componente = pathname.split('.html')[0];
    // Obtiene los parametros
    const urlparams = new URLSearchParams(search);
    // Obtenemos la plantilla del sitio
    let layout = Layout();
    // Definimos las rutas de la aplicación
    const routes = {
        "/": Home,
        '/index': Home,
        '/detalles:id': Detalles,
    };

    // obtene el contenido a mostrar
    urlparams.has('id') ? contenido = routes[`${componente}:id`] : contenido = routes[componente];
    // Regresa el contenido a mostrar al cliente
    return layout.replace('<Outlet />', contenido || NotFound);
}
export default App;
export { API_URL };