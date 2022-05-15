import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) {
    this.empleados = this.employeeService.empleados
  }

  ngOnInit(): void {
  }

  empleados:Empleado[] = [
  ];
}
