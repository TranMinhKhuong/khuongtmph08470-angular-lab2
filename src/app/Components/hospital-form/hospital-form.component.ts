import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Hospital } from "../object/object.component";
@Component({
  selector: 'hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css']
})
export class HospitalFormComponent implements OnInit {
  @Input() hosptl: Hospital;

  @Output() saveHospital = new EventEmitter<Hospital>();
  @Output() canelHopt = new EventEmitter();

  public saveHosptl() {
    let curedHop = parseInt(this.hosptl.cured + "");
    let diedHop = parseInt(this.hosptl.died + "");
    if (this.hosptl.sumCovid19 < curedHop + diedHop) {
      alert("Tổng số ca nhiễm phải >= ca đã khỏi + ca tử vong");
      return;
    }
    this.saveHospital.emit(this.hosptl);
  }

  checkSoLg(event) {
    if (parseInt(event.target.value) < 0) {
      alert("Số lượng phải >= 0");
      event.target.value = 0;
    }
  }

  public canelHoptEvent(){
    this.canelHopt.emit();
  };
  
  constructor() { }

  ngOnInit() {
  }

}