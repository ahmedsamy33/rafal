import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-changepic',
  templateUrl: './changepic.component.html',
  styleUrls: ['./changepic.component.css']
})
export class ChangepicComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {
    console.log("done");

  }

  ngOnInit() {
  }

}
