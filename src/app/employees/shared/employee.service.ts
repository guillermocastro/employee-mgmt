import { Injectable } from '@angular/core';
//FB
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Employee } from './employee.model'

@Injectable()
export class EmployeeService {
  employeelist:AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase:AngularFireDatabase) { }
  getData(){
    this.employeelist=this.firebase.list('employees');
    return this.employeelist;
  }
  insertEmployee(employee:Employee){
    this.employeelist.push({
      name:employee.name,
      position:employee.position,
      office:employee.position,
      salary:employee.salary
    });
  }

  updateEmployee(employee:Employee){
    this.employeelist.update(employee.$key,{
      name:employee.name,
      position:employee.position,
      office:employee.position,
      salary:employee.salary
      
    });
  }

  deleteEmployee($key:string){
    this.employeelist.remove($key);
  }
}
