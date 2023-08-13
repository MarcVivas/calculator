let operationList = {num1: undefined, operator: undefined, num2: undefined};
const operation = document.querySelector("#operation");
const result = document.querySelector("#result");
let lastOperation;

function operate(){
    let num1 = Number(operationList.num1);
    let num2 = Number(operationList.num2);
    if(operationList.operator === "x"){
        result.innerText = num1 * num2;
    }
    else if(operationList.operator === "/"){
        result.innerText = num1 / num2;
    }
    else if(operationList.operator === "+"){
        result.innerText = num1 + num2;
    }
    else if(operationList.operator === "-"){
        result.innerText = num1 - num2;
    }
}

let length = 0;
function buttonCallback(e){
    const value = e.target.value;
    

    if(lastOperation === "="){
        operation.innerText = "";
        lastOperation = "";
        operationList = {num1: undefined, operator: undefined, num2: undefined};
        length = 0;
    }
    
    if(value === "Clear"){
        operation.innerText = "";
        result.innerText = "";
        length = 0;
        return;
    }
    else if(value === "DEL"){
        operation.innerText = operation.innerText.slice(0, -1);
        if(operationList.operator === undefined && operationList.num1 !== undefined){
            operationList.num1 = operationList.num1.slice(0, -1);
        }
        else if (operationList.num2 !== undefined){
            operationList.num2 = operationList.num2.slice(0, -1);
        }
        else if(operationList.operator !== undefined){
            operationList.operator = undefined;
        }
        if(length > 0){length--;}
        return;
    }
    else if(value === "="){
        operate();
        lastOperation = "=";
    }
    if(length < 9){
        operation.innerText += value;
        length ++;

    }
    else{return}
    
    if(value === "x"){
        operationList.operator = "x";
        return;
    }
    else if (value === "/"){
        operationList.operator = "/";
        return;
    }
    else if (value === "+"){
        operationList.operator = "+";
        return;
    }
    else if (value === "-"){
        operationList.operator = "-";
        return;
    }
    
    // value is a number
    if(operationList.operator === undefined){
        if(operationList.num1 === undefined){
            operationList.num1 = value;
        }
        else{
            operationList.num1 += value;
        }
    }
    else{
        if(operationList.num2 === undefined){
            operationList.num2 = value;
        }
        else{
            operationList.num2 += value;
        }
    }
    
}

function main() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => button.addEventListener("click", buttonCallback));
}

main();