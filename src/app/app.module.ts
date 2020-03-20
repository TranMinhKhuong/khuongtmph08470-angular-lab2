import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HospitalComponent } from './Components/hospital/hospital.component';
import { HospitalFormComponent } from './Components/hospital-form/hospital-form.component';
import { HospitalInfoComponent } from './Components/hospital-info/hospital-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HospitalComponent, HospitalFormComponent, HospitalInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
