let celsius=document.getElementById("celsius");
let fahrenheit=document.getElementById("fahrenheit");
function celToFar(){
    let ouput =(parseFloat(celsius.value)* 9/5)+32;
    fahrenheit.value=parseFloat(ouput.toFixed(2));
}
function FarToCel() {
    let output =(parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
}