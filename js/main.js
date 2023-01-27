import { recetas } from "./recetas.js";
let numero = 0;
let array = []

//setear boton para siguiente receta
let botonNext = document.getElementById("next-recipe")
botonNext.addEventListener("click", nextRecipe)

//setear boton para anterior receta
let botonPrev = document.getElementById("prev-recipe")
botonPrev.addEventListener("click", previousRecipe)

//setear boton de buscar
let botonBuscar = document.getElementById("test1")
botonBuscar.addEventListener("click", getCheckedBoxes)


//Función para saber si es vegano y lo guardamos en localStorage para que no se vuelva a pedir
function vegano() {
    if (localStorage.getItem(vegano) === null) {
        let veggie = confirm("Sos vegano?\n1- Si\n2- No")
        if (veggie === true) {
            localStorage.setItem(vegano, true)
        } else { localStorage.setItem(vegano, false) }
    }
}




function checkVegano() {
    if (localStorage.getItem(vegano) === true) {
        eliminarRecetasVeganas(recetas)
    }
}

// checkVegano(esVegano)

//Función para borrar recetas dependiendo del atributo vegano
function eliminarRecetasVeganas() {
    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].veggie === false) {
            recetas.splice(i, 1);
            i--;
        }
    }
}

function eliminarRecetas(recetas, indice) {
    recetas.splice(indice, 1);
}

function imageAtributes(img, title) {
    img.height = "200px";
    img.width = "250px";
    img.alt = title;
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

function deleteChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function setRecipe(recipeNumber) {

    

    //asignamos los datos de los objetos a variables
    let instructions = recetas[recipeNumber].instrucciones;
    let ingredients = recetas[recipeNumber].ingredientes
    let titulo = recetas[recipeNumber].nombreReceta;
    let fondo = recetas[recipeNumber].foto;

    //asignamos los valores a los tags html
    document.getElementById("instructions").innerText = instructions;
    document.getElementById("recipe-name").innerText = titulo;

    //Borramos la lista de ingredientes actual
    let parentIngredientes = document.getElementById("ingredients-list")
    deleteChilds(parentIngredientes)

    //Bucle for para agregar la nueva lista
    for (let i = 0; i < ingredients.length; i++) {
        let list = document.createElement("li");
        list.innerText = ingredients[i];
        document.getElementById("ingredients-list").appendChild(list)
    }

    //seteamos fotos y ponemos atributos de foto
    const back = document.getElementById("recipe-photo");
    back.src = fondo
    imageAtributes(back, titulo)

    //escondemos botones si no hay mas elementos
    if (recipeNumber == 0) {
        botonPrev.style.visibility = "hidden";
    }
    else { botonPrev.style.visibility = "visible" }

    if (recipeNumber == recetas.length - 1) {
        botonNext.style.visibility = "hidden";
    }
    else { botonNext.style.visibility = "visible" }

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





function compareIngredients(checked) {
    let cantIngredientes = 0
    let nroReceta;

    //iteramos sobre el array de ingredientes de cada receta buscando coincidencias.
    for (let i = 0; i < recetas.length; i++) {
        cantIngredientes = 0
        // seteamos cantidad de ingredientes en 0 en cada cambio de recetas y buscamos coincidencias.
        for (let j = 0; j < checked.length; j++) {
            if (recetas[i].ingredientes.includes(checked[j])) {
                cantIngredientes++
                console.log(cantIngredientes)
            }
                        
        }
        //Si hay menos de dos coincidencias borramos la receta en cuestión
        if (cantIngredientes <= 1) {
            nroReceta = i;
            eliminarRecetas(recetas, nroReceta)
            console.log("Borrar?")
        }
        
    }
    numero=0
    setRecipe(numero)

}



function getCheckedBoxes() {
    var checkboxes = document.getElementsByName('cbox');
    var checkboxesChecked = [];
    // loop over them all
    for (var i = 0; i < checkboxes.length; i++) {
        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].value);
        }
    }

    console.log(checkboxesChecked)
    for (let i = 0; i < recetas.length; i++) {
        compareIngredients(checkboxesChecked)        
    }
    
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}



vegano()
eliminarRecetasVeganas()
setRecipe(numero)

function nextRecipe() {
    if (numero < recetas.length){
    numero++
    setRecipe(numero)
}  else{
    alert("no hay mas recetas")
}
}

function previousRecipe() {
    numero--
    setRecipe(numero)
}

