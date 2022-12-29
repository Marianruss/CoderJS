

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
        else {alert("Ingresa una opción valida")}
    }
}

const receta = selectReceta();

if (receta.toLowerCase() === "nada") {
    alert(`No podes cocinar nada con esos ingredientes`)
} else {
    alert(`Con tus ingredientes podes cocinar ${receta}`)
}

