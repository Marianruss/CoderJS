import { recetas } from "./recetas.js";
let numero = 0;

//setear boton para siguiente receta
let botonNext = document.getElementById("next-recipe")
botonNext.addEventListener("click", nextRecipe)

//setear boton para anterior receta
let botonPrev = document.getElementById("prev-recipe")
botonPrev.addEventListener("click", previousRecipe)

function selectReceta() {
    let end = false
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

function imageAtributes(img, title) {
    img.height = "200px";
    img.width = "250px";
    img.alt = title;
}


function setRecipe(recipeNumber) {
    // const [boton1,boton2] = setButtons()
    //asignamos los datos de los objetos a variables
    let instructions = recetas[recipeNumber].instrucciones;
    let ingredients = recetas[recipeNumber].ingredientes
    let titulo = recetas[recipeNumber].nombreReceta;
    let fondo = recetas[recipeNumber].foto;

    //asignamos los valores a los tags html
    document.getElementById("instructions").innerText = instructions;
    document.getElementById("ingredients-list").innerText = ingredients;
    document.getElementById("recipe-name").innerText = titulo;
    const back = document.getElementById("recipe-photo");
    back.src = fondo
    imageAtributes(back, titulo)

    //escondemos botones si no hay mas elementos
    if (recipeNumber == 0) {
        botonPrev.style.visibility = "hidden";
    }
    else { botonPrev.style.visibility = "visible" }

    if (recipeNumber == recetas.length-1) {
        botonNext.style.visibility = "hidden";
    }
    else { botonNext.style.visibility = "visible" }

}


setRecipe(numero)
// const receta = selectReceta();



// if (receta.toLowerCase() === null) {
//     alert(`No podes cocinar nada con esos ingredientes`)
// } else {
//     alert(`Con tus ingredientes podes cocinar ${receta}`)
// }





// if (numero === 0) {
//     botonPrev.style.visibility = "hidden";
// }







function nextRecipe() {
    numero++
    setRecipe(numero)
}

function previousRecipe() {
    numero--
    setRecipe(numero)
}


