function appendValue(value){
    let display = document.getElementById("display");
    display.value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    let display = document.getElementById("display");

    try{
        let expression = display.value.replace(/%/g, "/100");
        let expression = display.value;
        let result = eval(expression);

        let historyList = document.getElementById("historyList");
        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.prepend(li);

        display.value = result;
    }
    catch{
        display.value = "Error";
    }
}

function deleteLast(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

document.addEventListener("keydown", function(event){

    if(!isNaN(event.key) || "+-*/.".includes(event.key)){
        appendValue(event.key);
    }

    if(event.key === "Enter"){
        calculate();
    }

    if(event.key === "Backspace"){
        deleteLast();
    }

    if(event.key === "Escape"){
        clearDisplay();
    }

});

function toggleTheme(){
    document.body.classList.toggle("light");
}
