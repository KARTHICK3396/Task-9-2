 document.getElementById("num1").innerHTML = "First";
  document.getElementById("num1").addEventListener("click", function(event){
    let number1 = 1;
    document.getElementById("number").textContent = number1;
});

let display2 = document.getElementById("num2").innerHTML = 2;
  document.getElementById("num2").addEventListener("click", function(event){
    let number2 = display2;
    document.getElementById("number").textContent = number2;
});

let display3 = document.getElementById("num3").innerHTML = 3;
  document.getElementById("num3").addEventListener("click", function(event){
    let number3 = display3;
    document.getElementById("number").textContent = number3;
});

let display4 = document.getElementById("num4").innerHTML = 4;
  document.getElementById("num4").addEventListener("click", function(event){
    let number4 = display4;
    document.getElementById("number").textContent = number4;
});

let display5 = document.getElementById("num5").innerHTML = 5;
  document.getElementById("num5").addEventListener("click", function(event){
    let number5 = display5;
    document.getElementById("number").textContent = number5;
});

let display6 = document.getElementById("num6").innerHTML = 6;
   document.getElementById("num6").addEventListener("click", function(event){
    let number6 = display6;
    document.getElementById("number").textContent = number6;
});

let display7 = document.getElementById("num7").innerHTML = 7;
  document.getElementById("num7").addEventListener("click", function(event){
    let number7 = display7;
    document.getElementById("number").textContent = number7;
});

let display8 = document.getElementById("num8").innerHTML = 8;
   document.getElementById("num8").addEventListener("click", function(event){
    let number8 = display8;
    document.getElementById("number").textContent = number8;
});

let display9 = document.getElementById("num9").innerHTML = 9;
  document.getElementById("num9").addEventListener("click", function(event){
    let number9 = display9;
    document.getElementById("number").textContent = number9;
});

let display10 = document.getElementById("num10").innerHTML = 10;
  document.getElementById("num10").addEventListener("click", function(event){
    let number10 = display10;
    document.getElementById("number").textContent = number10;
});

document.getElementById("previous").innerHTML = "Previous";
document.getElementById("previous").addEventListener("click", function(even){
    let displayValue = +document.getElementById("number").innerHTML - 1;
    if(displayValue > 1){
     document.getElementById("number").textContent = displayValue;
    }
    else {
        document.getElementById("number").textContent = 1;

    }
});


document.getElementById("next").innerHTML = "Next";
document.getElementById("next").addEventListener("click", function(even){
    let displayValue1 = +document.getElementById("number").innerHTML + 1;
    if(displayValue1 < 10){
    document.getElementById("number").textContent = displayValue1;
    } else {
      document.getElementById("number").textContent = 10;
    }
});


