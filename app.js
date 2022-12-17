var student1 = {
    firstname : "Syed",
    lastname : "Obaid",
    rollnumber : "1",
    contact : "03332145231",
    id : 302,
}

var student2 = {
    firstname : "Sumair",
    lastname : "khan",
    rollnumber : "2",
    contact : "03132145212",
    id : 303,
}

var student3 = {
    firstname : "Shapatar",
    lastname : "Raees",
    rollnumber : "3",
    contact : "03232145767" ,
    id : 304,
}

var student4 = {
    firstname : "Abdul",
    lastname : "Rafay",
    rollnumber : "4",
    contact : "03432140031",
    id : 305,
}

var student5 = {
    firstname : "Syed",
    lastname : "Uzair",
    rollnumber : "5",
    contact : "03344213231",
    id : 306,
}

var student6 = {
    firstname : "Muhammad",
    lastname : "Ahmed",
    rollnumber : "6",
    contact : "03032145030",
    id : 307,
}

var student7 = {
    firstname : "Sajid",
    lastname : "Khan",
    rollnumber : "7",
    contact : "03300005231",
    id : 308,
}

var student8 = {
    firstname : "Hassaan",
    lastname : "Khan",
    rollnumber : "8",
    contact : "03232135237",
    id : 309,
}

var student9 = {
    firstname : "Sundeer",
    lastname : "Ali",
    rollnumber : "9",
    contact : "03312326700",
    id : 310,
}

var student10 = {
    firstname : "Sharukh",
    lastname : "Khan",
    rollnumber : "10",
    contact : "03032141212",
    id : 311,
}


var inp1 = document.getElementById("inp1");

var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");
var para4 = document.getElementById("para4");
var para5 = document.getElementById("para5");


var a = [student1,student2,student3,student4,student5,student6,student7,student8,student9,student10];

function submit(){
    for(var i = 0; i < a.length; i++){
        if(inp1.value == a[i].rollnumber){
            para1.innerHTML = a[i].firstname
            para2.innerHTML = a[i].lastname
            para3.innerHTML = a[i].rollnumber
            para4.innerHTML = a[i].contact
            para5.innerHTML = a[i].id
        }
    }
    }
