

var equation = 0;
var number1 = null;
var number2 = null;
var sign = null;
var shownEquation = null;

function clearOut(){
    document.getElementById("result").innerHTML = '';
    number1 = null;
    number2 = null;
    sign = null;
}

function equal(){
    calculate(sign);
    number1 = equation;
    number2 = null;
    document.getElementById("result").innerHTML = equation;
}

function showNumber(number){
    if(number1 == null){
        number1 = number;
        document.getElementById("result").innerHTML = number;
    } else if(sign == null){
        number1 = (number1*10)+number;
        document.getElementById("result").innerHTML = number1;
    } else{
        if(number2 == null){
            number2 = number;
            document.getElementById("result").innerHTML = shownEquation + number2;
        } else {
            number2 = (number2*10) + number;
            document.getElementById("result").innerHTML = shownEquation + number2;
        }
    }
}

function showSign(signType){
    
    document.getElementById("result").innerHTML = sign;
    if(signType == "add"){  
        sign = "+";
        document.getElementById("result").innerHTML = number1 + "+";
        shownEquation = number1 + "+";
    } else if(signType == "minus"){
        sign = "-";
        document.getElementById("result").innerHTML = number1 + "-";
        shownEquation = number1 + "-";
    } else if(signType == "multiply"){
        sign = "*";
        document.getElementById("result").innerHTML = number1 + "*";
        shownEquation = number1 + "*";
    } else if(signType == "divide"){
        sign = "/";
        document.getElementById("result").innerHTML = number1 + "/";
        shownEquation = number1 + "/";
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

