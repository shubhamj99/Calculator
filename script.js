var buttons=document.getElementsByClassName("btn");
var display=document.getElementById("display");
var display1=document.getElementById("display1");
var v1 = 0;
var v2 = null;
var funct = null;
var result = null;
var clear = false;
function calc(){
    var value = $(this).val();
    if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%'){
        if(value == '+'){funct = '+';}
        else if(value == '-'){funct = '-';}
        else if(value == '*'){funct = '*';}
        else if(value == '/'){funct = '/';}
        else if(value == '%'){funct = '%';}
        display1.innerText+=funct;
        v1 = parseFloat(display.textContent);
        if(v2 == null && value == '*'){
            v2 = 1;
        }
        if(v2 == null && value == '/'){
            v2 = 1;
        }
        v2 = eval(v1 + " " + funct + " " + v2);
        display.innerText = "";
    }
    else if(value == '='){
        var v3 = parseFloat(display.textContent);
        result = eval(v2 + " " + funct + " " + v3);
        display.innerText = result;
        v2 = null;
        clear = true;
        display1.innerText = display.innerText;
    }
    else if(value == 'AC'){
        display.innerText="";
        display1.innerText="";
        v1 = 0;
        v2 = null;
        funct = null;
        result = null;
    }
    else{
        if(clear == true){
            display.innerText="";
            clear = false;
        }
        display.innerText+=value;
        display1.innerText+=value;
    }
};

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',calc);
}