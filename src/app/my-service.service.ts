import { Injectable } from '@angular/core';

@Injectable()

export class MyServiceService {

  public EmpRecord = [
    {
      id:"e1",
      name:"sachin",
      city:"mumbai",
      age:40
    },
    {
      id:"e2",
      name:"Rahul ",
      city:"maharastra",
      age:38
    },
    {
      id:"e3",
      name:"kohli",
      city:"delhi",
      age:32
    }
  ];

  // public getEmp(id:string):any{

  //   let employee:any;

  //   for(let i=0;i<this.EmpRecord.length;i++){
  //     if(id === this.EmpRecord[i].id){
  //       employee = this.EmpRecord[i];
  //       break;
  //     }
  //   }
  //   return employee;
  // }

  public getEmp():any{

    let employee:any = [];
 

    for(let i=0;i<this.EmpRecord.length;i++){
      employee.push(this.EmpRecord[i]);
    }
    console.log("------",employee);
    return employee;

    
  }

  constructor() { }

  
}
