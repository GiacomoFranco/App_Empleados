import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styleUrls: ['./employee-forms.component.css']
})

export class EmployeeFormsComponent implements OnInit {

  @Output() nameEmitter = new EventEmitter<string>();

  addName(newName:string){
    this.nameEmitter.emit(newName);
  }


  constructor() {

  }
  ngOnInit(): void {
  }

}
