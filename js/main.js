var test = ["1. En primer lugar, para hacer esta tostada caprese (o caprese panini) procuraremos que la rebanada de pan no sea muy fina y que tenga una densa miga que permita y aguante la colocación del resto de los ingredientes, como se explica a continuación.\n\n2. Con la elección del pan hecha, ponemos a tostar la rebanada y mientras vamos lavando y troceando el tomate en daditos pequeños. Hecho esto, colocamos el tomate sobre la rebanada de pan, y encima ponemos la mozzarella cortada en finas lonchas.\n\n3. Una vez montada, metemos nuestra tostada caprese en el horno o en el microondas y seleccionamos la función grill (si haces las tostadas caprese en microondas, asegúrate primero de que tiene función grill) hasta que el pan esté doradito y el queso quede ligeramente fundido.\n\n4. Por último, sacamos las tostadas caprese del horno o microondas con cuidado de no quemarnos, y decoramos con las hojas de albahaca frescas. ¡Una tostada fresca y sabrosa para las cenas de verano!"];

function selectReceta() {
    let end = false;
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



function createli() {

    const container = document.getElementById("recipe-list");

    var ul = document.createElement('ul');
    ul.setAttribute('id', 'test')

    for (i = 0; i <= test.length - 1; i++)
        var li = document.createElement('li')
        li.innerHTML = test[i];
        li.setAttribute('style', 'display: block');
        
        ul.appendChild(li);

}

function setRecipe(){
    var instructions = test[0];
    document.getElementById("instructions").innerText = instructions

}

// console.log(test[1])
setRecipe()
createli()
const receta = selectReceta();



if (receta.toLowerCase() === null) {
    alert(`No podes cocinar nada con esos ingredientes`)
} else {
    alert(`Con tus ingredientes podes cocinar ${receta}`)
}




