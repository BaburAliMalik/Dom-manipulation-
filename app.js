var chemMarks = document.querySelector("#chem-Marks");
var phyMarks = document.querySelector("#phy-Marks");
var mathMarks = document.querySelector("#math-Marks");
var comMarks = document.querySelector("#com-Marks");
var studentTotal = document.querySelector("#student-Total");
var percentage = document.querySelector("#percentage");
var grade = document.querySelector("#grade");

function calculatePercentage(){
    console.log(chemMarks.value)
    console.log(phyMarks.value)
    console.log(mathMarks.value)
    console.log(comMarks.value)
}

var totalMarks = 400;
var obtainedMarks = +chemMarks.value + +phyMarks.value + + mathMarks.value + + comMarks.value;
console.log('obtainedMarks' , obtainedMarks);
studentTotal.innerHTML = obtainedMarks;

var studentPercentage = obtainedMarks / totalMarks * 100;
percentage.innerHTML = studentPercentage;

if(studentPercentage > 80){
    grade.innerHTML = 'A+'
}else if(studentPercentage > 70){
    grade.innerHTML = 'A'
} else if(studentPercentage > 60){
    grade.innerHTML = 'B'
}else{
    grade.innerHTML = 'FAIL'
}

