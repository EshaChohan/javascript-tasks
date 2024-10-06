function getAge() {
   
    var dateOfBirthInput = document.getElementById('dateOfBirth').value;
    var currentDateInput = document.getElementById('currentDate').value;

    if (!dateOfBirthInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    var dateOfBirth = new Date(dateOfBirthInput);
    var currentDate = new Date(currentDateInput);

    var years = currentDate.getFullYear() - dateOfBirth.getFullYear();
 var months = currentDate.getMonth() - dateOfBirth.getMonth();
    var days = currentDate.getDate() - dateOfBirth.getDate();
if(dateOfBirth.getMonth()>currentDate.getMonth()){
    years--;
months = 12+ months
}
if(dateOfBirth.getDate()>currentDate.getDate()){
    months--;
    days = 30+days;
}
    return document.getElementById('Age').innerHTML =  
        "Age is: " + years + " years " + months + " months " + days + " days "}