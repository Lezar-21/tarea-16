// Esta función utiliza Mutationobserver para devolver
// un elemento HTML cuando ya este disponible
const getElemento = (selector) => {
    return new Promise(resolve => {
        // si ya esta el elemento, lo regresa
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        // MutationObserver reacciona ante cambios en el DOM
        // En cada cambio en el DoM va ejecutar esta función
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                // si ya lo encontramos, dejamos de revisar el DOM
                observer.disconnect();
            }
        })
        // Definimos que este pendiente de cambios en el document.body
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};
export default getElemento;