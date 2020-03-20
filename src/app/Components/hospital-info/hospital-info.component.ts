import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Hospital } from "../object/object.component";

@Component({
  selector: 'hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.css']
})
export class HospitalInfoComponent implements OnInit {
  @Input() hospital: [];
  @Output() delHopstl = new EventEmitter();
  @Output() editHopstl = new EventEmitter<Hospital>();
  
  public delHostlEvent(h) {
    this.delHopstl.emit(h);
  }

  public editHopstlEvent(h) {
    this.editHopstl.emit(h);
  }

  constructor() { }

  ngOnInit() {
  }

}