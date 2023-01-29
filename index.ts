
interface student {
    id: number;
    name: string;
    level: string;
    isSenior: boolean;
  };

  
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

     function isSeniorState(obj: any, isSenior: boolean) {

        obj.isSenior = isSenior;
    
        return obj;
    }
    
    function course(number: any, courseNum: number) {

        number.courseNum = courseNum;
    
        return number;
    }
    
    console.log(course(school[3], 5));

    export{}