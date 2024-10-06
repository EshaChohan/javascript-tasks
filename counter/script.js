 var num = 0;
 function increase(){
    num++
    document.getElementById("number").innerHTML = num;
 }
 function decrease(){
    num--
    document.getElementById("number").innerHTML = num
 }
 function reset(){
num = 0
document.getElementById("number").innerHTML = num
 }