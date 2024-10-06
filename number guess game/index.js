
 var correctNum = 49
 
 function checkOut(){
    var num =document.getElementById("number").value;
   
if (num == correctNum){
    document.getElementById('result').innerHTML = "Congratulations!!! You Put Correct Number."
}
else if(!num){
    document.getElementById('result').innerHTML = "Firstly, Enter Number Please!!!"
}
else if (num >=40 && num <=60) {
    document.getElementById('result').innerHTML = "You Are So Close, Try One More Time."}
else if (num >60 && num<=100){
    document.getElementById('result').innerHTML = "The Number You Put is So Higher"
}
else if (num <40 && num >=1){
    document.getElementById('result').innerHTML = "The Number You Put is So Lower"
}

  else {
     document.getElementById('result').innerHTML = "Please Enter Number between 1 - 100"
 }

return
 }
 