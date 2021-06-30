const buttons = document.querySelectorAll('.numberButton');
const signButtons = document.querySelectorAll('.signButton');
const display = document.getElementById("a");
const clear = document.getElementsByClassName('clearButton');
const equal = document.getElementsByClassName('equalButton');
const backSpace = document.getElementsByClassName('backSpaceButton');
let sign = false;

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        if(display.innerHTML == "0")
            display.innerHTML = "";
        display.innerHTML += event.target.innerHTML; 
        });
});

signButtons.forEach(i => {
    i.addEventListener('click', function(event) {
        if(sign == false)
        {
            display.innerHTML += event.target.innerHTML; 
            sign =  true;
        }
        });
});

clear[0].addEventListener('click', function(event) {
    display.innerHTML = "0";
    sign = false;
});

equal[0].addEventListener('click', function(event) {
    display.innerHTML = eval(display.innerHTML);
    sign = false;
});

backSpace[0].addEventListener('click', function(event) {
    if(display.innerHTML == "NaN" || display.innerHTML == "Infinity")
        {
            display.innerHTML = "0";
            sign = false;
        }
    else
    {
        if(display.innerHTML.length == 1)
            display.innerHTML = "0";
        else
        {
            if(display.innerHTML[display.innerHTML.length - 1] == "+" || display.innerHTML[display.innerHTML.length - 1] == "-" || display.innerHTML[display.innerHTML.length - 1] == "*" || display.innerHTML[display.innerHTML.length - 1] == "/")
                {
                    display.innerHTML = display.innerHTML.slice(0, -1);
                    sign = false;
                }
            else
                display.innerHTML = display.innerHTML.slice(0, -1);
        }
            
    }
});

