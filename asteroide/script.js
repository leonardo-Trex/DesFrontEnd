function soma(n1, n2) { 
    console.log(n1+n2)
}
function subtracao(n1, n2) { 
    console.log(n1-n2)
}

function divisao(n1, n2) { 
    console.log(n1/n2)
}

function multiplicação(n1, n2) { 
    console.log(n1*n2)
}

// soma(1,2)
// subtracao(1,2)
// divisao(1,2)
// multiplicação(1,2)

let operations = {
    soma         :  function(x, y){return x+y},
    subtração    :  function(x, y){return x-y;},
    multiplicação:  function(x, y){return x*y;},
    divisão      :  function(x, y){return x/y;}

}



// operations["soma"](8,2);
// operations["subtração"](8,2);
// operations["divisão"](8,2);
// operations["multiplicação"](8,2);


let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");




btn1.addEventListener("click", () => {
    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)
    let res = operations["soma"](x, y)

    document.getElementById("resultado").innerHTML = res
    
})

btn2.addEventListener("click", () => {
    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)
    let res = operations["subtração"](x, y)

    document.getElementById("resultado").innerHTML = res
    
})
btn3.addEventListener("click", () => {
    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)
    let res = operations["divisão"](x, y)

    document.getElementById("resultado").innerHTML = res
    
})
btn4.addEventListener("click", () => {
    let values = document.querySelectorAll("input");
    let x = parseInt(values[0].value)
    let y = parseInt(values[1].value)
    let res = operations["multiplicação"](x, y)

    document.getElementById("resultado").innerHTML = res
    
})


