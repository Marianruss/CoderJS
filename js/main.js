import { recetas } from "./recetas.js";
let numero = 0;
let array = []

function selectReceta() {
    let end = false
    while (end != true) {
        let ingrediente = prompt('Selecciona los ingredientes principales principal:\n1- Albahaca y tomate\n2- Pollo y queso');
        
        if (isNaN(ingrediente)){
            alert("Ingresa un numero")
        }

        else if (parseInt(ingrediente) === 1){
            array.push(ingrediente)
            end = true;
            return (1)
        }
        else if (parseInt(ingrediente) === 2) {
            array.push(ingrediente)
            end = true
            return (2)
        }
        else if ((parseInt(ingrediente) >= 3) || (parseInt(ingrediente) <= 0)){
            alert("Elegí un número entre 1 y 2")
        }
        else { alert("Ingresa una opción valida") }
    }
}

function mostrarReceta(index) {
    alert(`Con tu ingredientes podes cocinar ${recetas[index].nombreReceta}`)
    alert("Verás las instrucciones a continación")
    alert(`Para cocinar ${recetas[index].nombreReceta} necesitas: \n\n${recetas[index].ingredientes}`)
    alert(`Es una receta muy facil, en la proxima ventana verás las instrucciones`)
    alert(`Los pasos para preparar ${recetas[index].nombreReceta} son:\n\n${recetas[index].instrucciones}`)
}



const receta = selectReceta();

console.log(array[0])

// mostrarReceta(0)

if (receta === null) {
    alert(`No podes cocinar nada con esos ingredientes`)
} else if (receta == 1){
    mostrarReceta(0)
}
else if (receta == 2){
    mostrarReceta(1)
}



