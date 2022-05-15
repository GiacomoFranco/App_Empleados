import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormsComponent } from './employee-forms/employee-forms.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    EmployeeComponent,
    EmployeeFormsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
