 function nome(elemento) {
    let pokemon = elemento.value

    if(pokemon.toUpperCase() == "EEVEE"){
        alert("Acertou!")
    } else {
        alert("Que pena! Tente novamente")
    }

    elemento.value = ""
 }
