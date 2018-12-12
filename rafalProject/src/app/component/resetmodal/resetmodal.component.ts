import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-resetmodal',
  templateUrl: './resetmodal.component.html',
  styleUrls: ['./resetmodal.component.css']
})
export class ResetmodalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {
    console.log("ddddd");

  }
  ngOnInit() {
  }

}
