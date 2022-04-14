import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AppEmpleados';
  nameInput: string="";
  mailInput: string="";
  DNIInput: number = 0;
  positionInput: string="";
  salaryInput: number = 0;
  empleados:Empleado[]=[
    new Empleado("Andrés", "mail@andres", 1312312, "🤠", 121),
  ]


  newEmployee(name:string, mail:string, DNI:number, position:string, salary:number){
    if (name == "" || mail == "" || DNI == 0 || position == "" || salary == 0) {
      alert("introduce todos los campos imbécil")
    }
    else{
      this.empleados.push(new Empleado(name, mail, DNI, position, salary));
      this.nameInput="";
      this.mailInput="";
      this.DNIInput=0;
      this.positionInput="";
      this.salaryInput=0;
      console.log(this.empleados);
    }
  }
}

