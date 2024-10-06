

function display(value){
    document.getElementById("displayNum").value += value;
}
function calculate(){
    document.getElementById("displayNum").value = eval(displayNum.value)
}
function clearAll(){
    document.getElementById("displayNum").value = '';
}
function cancel(){
    document.getElementById("displayNum").value = displayNum.value.slice(0, -1)
}
