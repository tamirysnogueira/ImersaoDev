function calcular() {
    var opc = document.getElementById("escala").selectedIndex

    var temp = document.getElementById("temp").value

    if (temp == "") {
        alert("Atenção! Campos essenciais vazios! Digite novamente")
    } else {
        if (opc == 0){
            var C = (temp - 32)/ 1.8
            C = C.toFixed(1)


            document.getElementById("resultado").innerHTML = `A temperatura em Celsius é: ${C}`
        } else {
            var F = temp * 1.8 + 32
            F = F.toFixed(1)

            document.getElementById("resultado").innerHTML = `A temperatura em Fahrenheit é: ${F}`
        }
    
    }
    
}