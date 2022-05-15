import { Component, OnInit, } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})

export class NavigatorComponent implements OnInit {

  constructor(private openModal:SwitchService) { }

  addEmployee(){
    this.openModal.$modal.emit(true);
  }

  ngOnInit(): void {
  }
}

