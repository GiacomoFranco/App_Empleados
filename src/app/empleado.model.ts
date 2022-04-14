
export class Empleado{
  /**
   *
   * @param name
   * @param mail
   * @param dateBorn
   * @param age
   * @param DNI
   * @param position
   * @param salary
   */

  constructor(public name : string, public mail: string, public dateBorn:string, public age:number, public DNI: number, public position: string, public salary: number){}
}
