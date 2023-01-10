import { objetos } from "./recetas.js";


function selectReceta() {
    while (end != true) {
        let ingrediente = prompt('Selecciona un ingrediente principal:\n- Queso\n- Papa');
        if (ingrediente.toLowerCase() === "queso") {
            end = true;
            return ("Pizza")
        }
        else if (ingrediente.toLowerCase() === "papa") {
            end = true
            return ("Puré")
        }
        else { alert("Ingresa una opción valida") }
    }
}


function setRecipe(recipeNumber){

    let instructions = objetos[recipeNumber].instrucciones;
    let ingredients = objetos[recipeNumber].ingredientes
    let titulo = objetos[recipeNumber].nombreReceta;
    document.getElementById("instructions").innerText = instructions;
    document.getElementById("ingredients-list").innerText = ingredients;
    document.getElementById("recipe-name").innerText = titulo;

}


setRecipe(0)
const receta = selectReceta();



if (receta.toLowerCase() === null) {
    alert(`No podes cocinar nada con esos ingredientes`)
} else {
    alert(`Con tus ingredientes podes cocinar ${receta}`)
}