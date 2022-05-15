import { Empleado } from "./empleado.model";

export class EmployeeService{

  empleados:Empleado[] = [
    new Empleado("Estefania Vélez Cárdenas", "estefaniavelezc@passiflora.com", "30/10/1998", 24, 1033177340, "🕵️‍♀️ DevOps", 4000000),
    new Empleado("Daniel Echeverri Castro", "danielecheverric@passiflora.com", "30/10/1998", 24, 1033177340, "👨‍💻 Frontend Developer", 4000000),
  ];


  addNewEmployeeService(empleado:Empleado){
    this.empleados.push(empleado);
  }

}
