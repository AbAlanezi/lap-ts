
interface student {
    id: number;
    name: string;
    level: string;
    isSenior: boolean;
  };
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
  
let school: student[] = [
    {id: 12, name: "ahmd",level: "on", isSenior: true}, 
    {id: 112, name: "ahmd",level: "one",isSenior: false},
    {id: 162, name: "ali",level: "one", isSenior: true}
 ]

function print(){
    for(let i = 0; i < school.length; i++){
        console.log(school[i])
    }
}
print()

  type StringOrNumber = string | number;
  
  interface Teacher {
      id: number;
      name: string;
      specialty: string;
      courseNum: number;
    }

    let Teachers: Teacher[] = [
        {id: 12, name: "salm", specialty: "IT", courseNum: 64}, 
        {id: 112, name: "fahed", specialty: "CS",courseNum: 43},
        {id: 162, name: "abdalazez", specialty: "IS", courseNum: 23}
     ]
     console.log(school.push.apply(Teachers, school))

     
    //  console.log( ThreeDVector)
    
//     const Teacher1:Teacher ={
//         id: 23242,
//         name: "ahmed",
//         specialty: "IT",
//         courseNum: 76
        
//     }
//     const Teacher2:Teacher ={
//         id: 23e242,
//     name: "ali",
//     specialty: "HR",
//     courseNum: 35

// }
// const Teacher3:Teacher ={
//     id: 2324223,
//     name: "slman",
//     specialty: "CS",
//     courseNum: 76
    
// }




// declare module "someModule" {
//     export type s = school | Teacher;
//   }

//   Teacher: 
//   interface Teachers{
    //     Teacher
    //   }
    export{}