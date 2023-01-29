"use strict";
exports.__esModule = true;
;
// let students: student = [
//     {id: 12, name: "ahmd",level: "on", isisSenior: true},
//     {id: 112, name: "ahmd",level: "one",isisSenior: false},
//     {id: 162, name: "ali",level: "one", isisSenior: true}
// ]
// console.log(students)
//   ;
//   let student2: student = {
//     id: 112,
//     name: "ahmd",
//     level: "one",
//     isisSenior: false
//   };
//   let student3: student = {
//     id: 162,
//     name: "ali",
//     level: "one",
//     isisSenior: true
//   };
// type school = {
//     id: number;
//     name: string;
//     specialty: string
//     courseNum: number;
//   };
var school = [
    { id: 12, name: "ahmd", level: "on", isSenior: true },
    { id: 112, name: "ahmd", level: "one", isSenior: false },
    { id: 162, name: "ali", level: "one", isSenior: true }
];
function print() {
    for (var i = 0; i < school.length; i++) {
        console.log(school[i]);
    }
}
print();
var Teachers = [
    { id: 12, name: "salm", specialty: "IT", courseNum: 64 },
    { id: 112, name: "fahed", specialty: "CS", courseNum: 43 },
    { id: 162, name: "abdalazez", specialty: "IS", courseNum: 23 }
];
console.log(school.push.apply(Teachers, school));
