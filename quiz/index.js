
function result() {
    document.getElementById("percentage").className = "percentage"
 document.getElementById("score").className = "score"
 var marks = 0
    // Question No 1
    var question1 = document.getElementById("q1").value;
    if (question1 === "alert('Hello World')") {
        document.getElementById("ans1").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question1) {
        document.getElementById("ans1").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans1").innerHTML = "Your Answer Is Incorrect"
    }
    if (question1 !== "" || question1 == "") {
        q1.disabled = true
    }
    // Question No 2
    var question2 = document.getElementById("q2").value;
    if (question2 === "var fullName;") {
        document.getElementById("ans2").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question2) {
        document.getElementById("ans2").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans2").innerHTML = "Your Answer Is Incorrect"
    }
    if (question2 !== "" || question2 == "") {
        q2.disabled = true
    }
    //  Question No 3
    var question3 = document.getElementById("q3").value;
    if (question3 === "string") {
        document.getElementById("ans3").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question3) {
        document.getElementById("ans3").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans3").innerHTML = "Your Answer Is Incorrect"
    }
    if (question3 !== "" || question3 == "") {
        q3.disabled = true
    }
    // Question No 4

    var question4 = document.getElementById("q4").value;
    if (question4 === "1") {
        document.getElementById("ans4").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question4) {
        document.getElementById("ans4").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans4").innerHTML = "Your Answer Is Incorrect"
    }
    if (question4 !== "" || question4 == "") {
        q4.disabled = true
    }
    // Question No 5
    var question5 = document.getElementById("q5").value;
    if (question5 === "||") {
        document.getElementById("ans5").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question5) {
        document.getElementById("ans5").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans5").innerHTML = "Your Answer Is Incorrect"
    }
    if (question5 !== "" || question5 == "") {
        q5.disabled = true
    }
    // Question No 6
    var question6 = document.getElementById("q6").value;
    if (question6 === "array") {
        document.getElementById("ans6").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question6) {
        document.getElementById("ans6").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans6").innerHTML = "Your Answer Is Incorrect"
    }
    if (question6 !== "" || question6 == "") {
        q6.disabled = true
    }
    //  Question No 7
    var question7 = document.getElementById("q7").value;
    if (question7 === "for (var i = 0; i <5; i++)") {
        document.getElementById("ans7").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question7) {
        document.getElementById("ans7").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans7").innerHTML = "Your Answer Is Incorrect"
    }
    if (question7 !== "" || question7 == "") {
        q7.disabled = true
    }
    // Question No 8
    var question8 = document.getElementById("q8").value;
    if (question8 === "variable") {
        document.getElementById("ans8").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question8) {
        document.getElementById("ans8").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans8").innerHTML = "Your Answer Is Incorrect"
    }
    if (question8 !== "" || question8 == "") {
        q8.disabled = true
    }
    // Question No 9
    var question9 = document.getElementById("q9").value;
    if (question9 === "pop") {
        document.getElementById("ans9").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question9) {
        document.getElementById("ans9").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans9").innerHTML = "Your Answer Is Incorrect"
    }
    if (question9 !== "" || question9 == "") {
        q9.disabled = true
    }
    // Question No 10
    var question10 = document.getElementById("q10").value;
    if (question10 === "++") {
        document.getElementById("ans10").innerHTML = "Your Answer Is Correct"
        marks++
    }
    else if (!question10) {
        document.getElementById("ans10").innerHTML = "You Did Not Write An Answer"
    }
    else {

        document.getElementById("ans10").innerHTML = "Your Answer Is Incorrect"
    }
    if (question10 !== "" || question10 == "") {
        q10.disabled = true
    }
    // result
    document.getElementById("score").innerHTML = "You Got " + marks + " Correct Answers Out Of 10";
var percent = (marks / 10) * 100;
  document.getElementById("percentage").innerHTML = percent + "%"; 
  document.getElementById("btn").style.display = "none"
  document.getElementById("mcqs").style.backgroundColor = "rgba(60, 255, 0, 0.075)"
   return
}

