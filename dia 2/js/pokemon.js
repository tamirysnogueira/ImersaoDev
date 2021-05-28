 function nome(elemento) {
    var pokemon = elemento.value

    if(pokemon.toUpperCase() == "EEVEE"){
        alert("Acertou!")
    } else {
        alert("Que pena! Tente novamente")
    }

    elemento.value = ""
 }
