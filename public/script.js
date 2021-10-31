document.getElementById("C").onclick = function(){
    document.getElementById("display-digit").innerHTML =""
 }



let numbers = document.querySelectorAll(".button")   //Atrapo a todos los botones dentro de la variable 

numbers.forEach(numberSelected => {                        //Asigna que a cada boton que le haga click, haga lo siguiente...
    numberSelected.addEventListener("click", ()=> {
        let displayNumbers = document.getElementById("display-digit")
        if(numberSelected.innerHTML === "." && displayNumbers.innerHTML.includes(".")){
            return
        }
        displayNumbers.innerHTML = displayNumbers.innerHTML + numberSelected.innerHTML //debo agregar .toString() a la suma de digitos??
        
    })
});