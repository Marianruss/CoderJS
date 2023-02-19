
let recetas = [];
let isReloading = false;
let number;


//Cargamos a un array la info del json.
async function loadToArray(array) {
    await fetch('./json/recetas-almuerzos.json')
        .then((resp) => resp.json())
        .then((data) => {
            for (let i = 0; i < data.recetas.length; i++) {
                array.push(data.recetas[i])
            }
            vegano()
            if (localStorage.getItem("vegano") === "true") {
                eliminarRecetasVeganas()
            }

        })
}

function reloadPage() {
    if (!isReloading) {
        isReloading = true;
        location.reload();
    }
}
//Necesitamos un numero random para mostrar la receta.
function getRandomNumber() {
    let flag = false
    while (flag === false){
        const numero = Math.floor(Math.random() * recetas.length)
        if (numero != number){
            number = numero
            return numero
    }}
    
}

function mediaQuery(){
    let res = "(max-width:550px)"
    var mq = window.matchMedia(res)

    if (mq.matches){
        let boton = document.getElementById("randomButton")
        boton.addEventListener("click", () =>{
            let win = document.getElementById("recipe")
            win.style.display = "block"
            addButtonToDiv()
        })
    }
}


function setRecipe(recipeNumber) {

    let recipe = recetas[recipeNumber];

    let instructions = recipe.instrucciones;
    let ingredients = recipe.ingredientes
    let titulo = recipe.nombreReceta;
    let fondo = recipe.foto;

    //asignamos los valores a los tags html
    document.getElementById("instructions").innerText = instructions;
    document.getElementById("recipe-name").innerText = titulo;

    //Borramos la lista de ingredientes actual
    let parentIngredientes = document.getElementById("ingredients-list")
    deleteChilds(parentIngredientes)

    for (let i = 0; i < ingredients.length; i++) {
        let list = document.createElement("li");
        list.innerText = ingredients[i];
        document.getElementById("ingredients-list").appendChild(list)
    }

    let back = document.getElementById("recipe-photo");
    back.src = fondo
    imageAtributes(back, titulo)

}


async function init() {

    await loadToArray(recetas);
    getName()

    if (localStorage.getItem("vegano") === null) {
        vegano()
    }

    if (localStorage.getItem("vegano") === "true") {
        eliminarRecetasVeganas()
    }

    let resetVegano = document.getElementById("reset-vegano")
    resetVegano.addEventListener("click", () => {
        localStorage.removeItem("vegano")
        vegano()
        

    })


    let botonBuscar = document.getElementById("randomButton");
    botonBuscar.addEventListener("click", () => {
        setRecipe(getRandomNumber());
    })
    setRecipe(getRandomNumber())
}

function vegano() {
    if (localStorage.getItem("vegano") === null) {
        alertify.confirm('Pregunta vegano', 'Sos vegano?',
            function () {
                localStorage.setItem("vegano", "true")
                reloadPage()
                isReloading = false
            }
            ,
            function () {
                localStorage.setItem("vegano", "false")
                reloadPage()
                isReloading = false
            }).set({ labels: { ok: 'Yes', cancel: 'No' } });;
    }
}

function eliminarRecetasVeganas() {

    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].veggie === false) {
            recetas.splice(i, 1);
            i--;
        }
    }

}




function getName() {

    // localStorage.removeItem("name")
    let nombre = localStorage.getItem("name")
    if (localStorage.getItem("name") === null) {
        alertify.prompt('Please enter your name', 'Usuario', function (e, str) {
            if (e) {
                let nombre = str;
                localStorage.setItem("name", nombre);
                alertify.success("Bienvenido " + nombre)
                document.getElementById('greetings').innerText = "Bienvenido " + nombre
            }
        })
    }
    else {
        document.getElementById('greetings').innerText = "Bienvenido " + nombre
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


function deleteChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}



//Auxiliar para mostrar array
function showArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function addButtonToDiv(){
    let div = document.getElementById("recipe")
    let button = document.createElement("button")

    button.innerHTML = "X"

    button.classList.add("closeButton")
    button.id = "closeButton"

    button.addEventListener("click", () =>{
        div.style.display = "none"
    })

    div.appendChild(button)

}


init()
mediaQuery()


