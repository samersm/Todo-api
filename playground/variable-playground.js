var person = {
    name: 'samer',
    age: 21
};

function updatePerson (obj) {
    obj.age = 24;
}

updatePerson(person);
console.log(person);


// challenge
// Array Example
var grades = [61, 81];

function addGrade(gradesArr) {
    gradesArr.push(74);
    // debugger;
    // gradesArr = [12, 33, 99];
}

addGrade(grades);
console.log(grades);
