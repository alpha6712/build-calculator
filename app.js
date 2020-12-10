//Variables 
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');
const allNumbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const equalBtn = document.querySelector('.equal');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');

let sign, result, outputOne, outputTwo,dot;

sign = '';
result = 'null';
outputOne = '';
outputTwo = '';
dot = false;



//Display input buttons on the screens
allNumbers.forEach(number => {
    number.addEventListener('click', showNumber)
});

function showNumber(e){
    if(e.target.innerText === '.' && !dot){
        dot = true
    }else if(e.target.innerText === '.' && dot){
        return;
    }
    outputTwo = outputTwo + e.target.innerText;
    display2.innerText = outputTwo;
}



//Display result on the screen
symbols.forEach(symbol => {
    symbol.addEventListener('click', showResult)
});
    
function showResult(e){
     if(!outputTwo) result;
        dot = false;
        const signName = e.target.innerText;
        if(outputOne && outputTwo && sign){
            checkCalculation();
        } else {
            result = parseFloat(outputTwo);
        }
        clearMainDisplay(signName);
        sign = signName;
        
    }

//Check math sign + - * /
function checkCalculation(){
    if(sign === 'X'){
       result = parseFloat(result) * parseFloat(outputTwo);
    } else if(sign === '+'){
        result = parseFloat(result) + parseFloat(outputTwo);
    } else if(sign === '-'){
        result = parseFloat(result) - parseFloat(outputTwo);
    } else if(sign === '/'){
        result = parseFloat(result) / parseFloat(outputTwo);
    } else if(sign === '%'){
        result = parseFloat(result) % parseFloat(outputTwo);
    }
}

function clearMainDisplay(name = ''){
    
    outputOne += outputTwo+ ' ' + name + ' ';
    display1.innerText = outputOne;
    display2.innerText = '';
    outputTwo = '';
    display3.innerText = result;
}



//Make calculation
equalBtn.addEventListener('click', calculate);

function calculate(){
    if(!outputOne || !outputTwo){
      return;
    }else{
    
    checkCalculation();
    clearMainDisplay();
    display2.innerText = result;
    outputTwo = result;
    display3.innerText = '';
    outputOne = '';  
    }
    
}


ceButton.addEventListener('click', deleteAll);
cButton.addEventListener('click', deleteLastInput);

function deleteAll(){
   display2.innerText = '';
   outputTwo = '';
}

function deleteLastInput(e){
 display1.innerText = '0';
 display2.innerText = '0';
 display3.innerText = '0';
 outputOne = '';
 outputTwo = '';
 result = '';
}





