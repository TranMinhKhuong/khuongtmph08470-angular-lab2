import { Component, OnInit } from '@angular/core';
import { Hospital } from "../object/object.component";

@Component({
  selector: "hospital",
  templateUrl: "./hospital.component.html",
  styleUrls: ["./hospital.component.css"]
})
export class HospitalComponent implements OnInit {

  hospitalList = [
    {
      id: 1,
      name: "Bach Mai",
      img: "https://i.ytimg.com/vi/SeUnWE0X5vw/hqdefault.jpg",
      hopManagerName: "Van Thang",
      address: "78 Đường Giải Phóng, Phương Đình, Đống Đa, Hà Nội",
      sumCovid19: 66,
      cured: 16,
      died: 50
    },
    {
      id: 22,
      name: "Việt Đức",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/B%E1%BB%87nh_vi%E1%BB%87n_Vi%E1%BB%87t_%C4%90%E1%BB%A9c%2C_Tr%C3%A0ng_Thi%2C_H%C3%A0_N%E1%BB%99i_002.JPG",
      hopManagerName: "Việt Đức",
      address: "40 Tràng Thi, Hàng Bông, Hoàn Kiếm, Hà Nội",
      sumCovid19: 14,
      cured: 10,
      died: 0
    }
  ];

  hospital: Hospital = {
    id: null,
    name: null,
    img: null,
    hopManagerName: null,
    address: null,
    sumCovid19: 0,
    cured: 0,
    died: 0
  };

  addHopt(hosptl) {
    if (this.hospital.id == null) {
      let idHoptl = 0;
      this.hospitalList.forEach(function(item) {
        if (idHoptl <= item.id) idHoptl = item.id;
      });
      this.hospital.id = ++idHoptl;
      this.hospitalList.push(this.hospital);
    }
    this.canelHopt();
  }

  editHoptl(hop) {
    for (let i = 0; i < this.hospitalList.length; i++) {
      if (this.hospitalList[i].id == hop.id) {
        this.hospital = this.hospitalList[i];
      }
    }
  }

  deleteHop(hop) {
    this.hospitalList = this.hospitalList.filter(function(item) {
      return item != hop;
    });
  }

  // printLog(hosptl: Hospital) {
  //   // console.log(...this.hospitalList);
  //   console.log(hosptl);
  //   alert(1);
  // }

  canelHopt() {
    this.hospital = {
      id: null,
      name: null,
      img: null,
      hopManagerName: null,
      address: null,
      sumCovid19: 0,
      cured: 0,
      died: 0
    };
  }
  constructor() { }

  ngOnInit() {
  }

}