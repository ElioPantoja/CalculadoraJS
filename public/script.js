document.getElementById("C").onclick = function(){
    document.getElementById("display-digit").innerHTML ="0"
 }



let numbers = document.querySelectorAll(".button")   /*Detecta a que boton hice click  */

numbers.forEach(element => {   
    element.addEventListener("click", ()=> {
        document.getElementById("display-digit").innerHTML = element.innerHTML
    })
});