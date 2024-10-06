
 function checkOut(){
    var randomNum = Math.round(Math.random()*2 +2);
    var num = document.getElementById("number").value;
   var result;
   if(randomNum ===3){
    result = "head"
   }else{
    result = "tail"
   }
  
 if (num === result){
    document.getElementById("update").innerHTML = "Congratulations!!! You Put Correct"
}
else if(!num){
    document.getElementById("update").innerHTML = "Please Enter head Or tail."
}
else if(num !== "head" && num !=="tail"){
    document.getElementById("update").innerHTML = "Please Enter head or tail Correctly ."
}
 else {
    document.getElementById("update").innerHTML = "Try One More Time."
}
console.log(result)
return
 }
