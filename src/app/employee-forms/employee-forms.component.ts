import { Component, OnInit, } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmployeeService } from '../employee.service';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styleUrls: ['./employee-forms.component.css']
})

export class EmployeeFormsComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private closeModal:SwitchService) {
  }

  closeForms(){
    this.closeModal.$modal.emit(false)
  }

  nuevosEmpleados:Empleado[] = [
  ];

  registerEmployee(name:string, mail:string, bornDate:string, age:any, DNI:any, position:string, salary:any){
    let nuevoEmpleado = new Empleado(name, mail, bornDate, age, DNI, position, salary);
    this.employeeService.addNewEmployeeService(nuevoEmpleado);
  }

  ngOnInit(): void {
  }

}
