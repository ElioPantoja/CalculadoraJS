document.getElementById("C").onclick = function(){
    document.getElementById("display-digit").innerHTML ="0"
 }

//let digitos = document.getElementsByClassName("button")

let digitos = []

document.onclick = function(e){
    digitos.push = e.target
    console.log(digitos)
    document.getElementById("display-digit").innerHTML = digitos
}