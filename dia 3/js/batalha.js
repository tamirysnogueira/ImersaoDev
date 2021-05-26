var vidaPalhaco = 200
var vidaDragao = 200

function duelo(){
    vidaPalhaco = vidaPalhaco - Math.floor(Math.random()*80)
    vidaDragao = vidaDragao -  Math.floor(Math.random()*80)


    document.getElementById("pontosVidaPalhaco").innerHTML = vidaPalhaco
    document.getElementById("pontosVidaDragao").innerHTML = vidaDragao

    if (vidaPalhaco < 1 || vidaDragao < 1){

        document.getElementById("botao").disabled = true
        document.getElementById("botao").style.cursor = "no-drop"

        if(vidaPalhaco < 1) {
            document.getElementById("vencedor").innerHTML = `O vencedor é Armed Dragon LV7!`
            document.getElementById("pontosVidaPalhaco").innerHTML = 0

        } else {
            document.getElementById("vencedor").innerHTML = `O vencedor é Summoned Skull!`
            document.getElementById("pontosVidaDragao").innerHTML = 0 
            
        }
    }
}
