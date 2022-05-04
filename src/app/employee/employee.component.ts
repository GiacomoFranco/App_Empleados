import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  empleados:Empleado[] = [
    new Empleado("Estefania Vélez Cárdenas", "estefaniavelezc@passiflora.com", "30/10/1998", 24, 1033177340, "🕵️‍♀️ DevOps", 4000000),
    new Empleado("Daniel Echeverri Castro", "danielecheverric@passiflora.com", "30/10/1998", 24, 1033177340, "👨‍💻 Frontend Developer", 4000000),
  ];

  newEmployee(name:string, mail:string, bornDate:string, age:number, DNI:number, position:string, salary:number){
    this.empleados.push(new Empleado(name, mail, bornDate, age, DNI, position, salary));

  }



}
