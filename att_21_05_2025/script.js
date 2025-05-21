function soma(){
    let res = document.getElementById("valor-resultado")

    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)

    res.innerHTML = x+y
}

function subtracao(){
    let res = document.getElementById("valor-resultado")

    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)

    res.innerHTML = x-y
}

function divisao(){
    let res = document.getElementById("valor-resultado")

    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)

    res.innerHTML = x/y
}

function multiplicacao(){
    let res = document.getElementById("valor-resultado")

    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)

    res.innerHTML = x*y
}

let btn_soma = document.getElementById("btn-soma");
let btn_subtrai = document.getElementById("btn-subtrai");
let btn_multiplica = document.getElementById("btn-multiplica");
let btn_divide = document.getElementById("btn-divide");

btn_soma.addEventListener("click", soma)
btn_subtrai.addEventListener("click", subtracao)
btn_multiplica.addEventListener("click", multiplicacao)
btn_divide.addEventListener("click", divisao)

