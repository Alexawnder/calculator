

var equation = 0;
var number1 = null;
var number2 = null;
var sign = null;
var repeat = false;

document.addEventListener('keydown', (event) => {
    console.log(event)
})

function clearOut(){
    document.getElementById("result").innerHTML = '';
    number1 = null;
    number2 = null;
    sign = null;
    equation = '';
    repeat = false;
}

function equal(){
    calculate(sign);
    number1 = equation;
    number2 = null;
    sign = null;
    document.getElementById("result").innerHTML = equation;
    repeat = true;
}

function showNumber(number){
    if(number1 == null){
        number1 = number;
        document.getElementById("result").innerHTML = number;
    } else if(sign == null){
        if(repeat){
            clearOut();
            number1 = (number1*10)+number;
            document.getElementById("result").innerHTML = number1;
            return;
        }
        number1 = (number1*10)+number;
        document.getElementById("result").innerHTML = number1;
    } else{
        if(number2 == null){
            number2 = number;
            document.getElementById("result").innerHTML = number1 + " " + sign + " " + number2;
        } else {
            number2 = (number2*10) + number;
            document.getElementById("result").innerHTML = number1 + " " + sign + " " + number2;
        }
    }
}

function showSign(signType){
    number2 = 0;
    document.getElementById("result").innerHTML = sign;
    if(number1 == null){
        document.getElementById("result").innerHTML = "Input a number first.";
        return;
    }
    if(signType == "add"){  
        sign = "+";
        document.getElementById("result").innerHTML = number1 + " +";

    } else if(signType == "minus"){
        sign = "-";
        document.getElementById("result").innerHTML = number1 + " -";
    
    } else if(signType == "multiply"){
        sign = "*";
        document.getElementById("result").innerHTML = number1 + " *";
    
    } else if(signType == "divide"){
        sign = "/";
        document.getElementById("result").innerHTML = number1 + " /";
    
    }
}

function calculate(signType){
    switch(signType){
        case '+':
            equation = number1 + number2;
            break;
        case '-':
            equation = number1 - number2;
            break;
        case '*':
            equation = number1 * number2;
            break;
        case '/':
            equation = number1 / number2;
            break;
        default:
            document.getElementById("result").innerHTML = "Issue with your equation";
    }
}

