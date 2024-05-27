import { KeyObject } from "crypto"

// employee record
interface ObjType{
   fname:string
   lname:string
   age:number
   id:number
   salary:number
   designation:string
}
let employee1:ObjType= { 

   fname:"Ali",
   lname:"Ahmed",
   age: 40,
   id:1,
   salary:1000,
   designation:"manager",
 }
 let employee2:ObjType={
   fname:"Ahsan",
   lname:"Siddiqui",
   age: 30,
   id:2,
   salary:50000,
   designation:"Asstistant manager",
}

let employee3:ObjType={
   fname:"Akram",
   lname:"khan",
   age: 43,
   id:3,
   salary:60000,
   designation:"Deputy manager",
}
// print all objects

console.log(employee1);
console.log(employee2);
console.log(employee3);


//  let name=(employee1:ObjType)=>{
//    return employee1.fname;
//  }
//  console.log(name(employee1));
//add or update fname in emp3

  employee3.fname="Mishal"
  console.log(employee3);

  //update age of emp2

  employee2.age=34;
  console.log(employee2);
  //delete lname of employee1
  delete employee1.lname;
  console.log(employee1);
  // print keyvalue of emp1
  let value=Object.values(employee1);
  console.log(value);

  for(let key in employee2){
   console.log(employee2[key]);
  }
  //check salary greater than 20000 of emp1
  
  let checksalary=(salary:number)=>{
   if(salary>20000){
      return employee1.salary;
   }
      else 
         return 1;
      }

      
  
  
  console.log(checksalary(employee1.salary));