import { Component, EventEmitter, Output } from '@angular/core';
import { Empleado } from './empleado.model';
import { SwitchService } from './switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private openModal:SwitchService){
  }

  ngOnInit(){
    this.openModal.$modal.subscribe((valor)=>(this.modal = valor))
  }



  title = 'AppEmpleados';
  modal:boolean;
  nameInput: string="";
  mailInput: string="";
  DNIInput: number = 0;
  positionInput: string="";
  salaryInput: number = 0;
  empleados:Empleado[]=[
    new Empleado("Andrés", "mail@andres", "21/10/2020", 14, 1312312, "🤠", 121),
  ];

  newEmployee(name:string, mail:string, bornDate:string, age:number, DNI:number, position:string, salary:number){
    if (name == "" || mail == "" || bornDate == "" || age == 0 ||  DNI == 0 || position == "" || salary == 0) {
      alert("introduce todos los campos imbécil")
    }
    else{
      this.empleados.push(new Empleado(name, mail, bornDate, age, DNI, position, salary));
      this.nameInput="";
      this.mailInput="";
      this.DNIInput=0;
      this.positionInput="";
      this.salaryInput=0;
      console.log(this.empleados);
    }
  }
}
