import { recetas } from "./recetas.js";
let numero = 0;
let array = []

//Función para saber si es vegano
function vegano() {
    let end = false

    while (end != true) {
        let veggie = prompt("Sos vegano?\n1- Si\n2- No")
        if (parseInt(veggie) == 1) {
            return true
        }
        else if (parseInt(veggie) === 2) {
            return false
        }
    }
}

//Función para borrar recetas dependiendo del atributo vegano
function eliminarRecetas(recetas) {
    for (let i = 0; i < recetas.length-1; i++) {
        if (recetas[i].veggie  === false) {
            recetas.splice(i,1);
            i--;
        }
    }
}


function selectReceta(vegano) {
    let end = false;
    let ingrediente;
    // const ingrediente = parseInt(prompt(message))

    while (end != true) {
        if (vegano === false) {
            ingrediente = prompt('Selecciona los ingredientes principales principal:\n1- Albahaca y tomate\n2- Pollo y queso');
            
        }
        else {
            ingrediente = prompt('Selecciona los ingredientes principales principal:\n1- Albahaca y tomate\n2- Tomate Cherry y brocoli');
            eliminarRecetas(recetas)
        }
        ingrediente = parseInt(ingrediente)

        if (isNaN(ingrediente)) {
            alert("Ingresa un numero")
        }

        else if (ingrediente === 1) {
            array.push(ingrediente)
            end = true;
            return (1)
        }
        else if (ingrediente === 2) {
            array.push(ingrediente)
            end = true
            return (2)
        }
        else if ((ingrediente >= 3) || (ingrediente <= 0)) {
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


//Auxiliar para mostrar array
function showArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

const esVegano = vegano();
const receta = selectReceta(esVegano);


if (receta === null) {
    alert(`No podes cocinar nada con esos ingredientes`)
} else if (receta == 1) {
    mostrarReceta(0)
}
else if (receta == 2) {
    mostrarReceta(1)
}



