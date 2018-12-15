import { AuthentionService } from './../../../services/shared/authention.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from '../../../services/shared/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepic',
  templateUrl: './changepic.component.html',
  styleUrls: ['./changepic.component.css']
})
export class ChangepicComponent implements OnInit {

  @Output() url= new EventEmitter;

  imageSrc = '';
 
  selectedFile: File = null;

  ChangProfileImgBtn = false;
  


  constructor(public bsModalRef: BsModalRef,public AuthService:AuthentionService , public spinner:NgxSpinnerService , public toastr :ToastrService) {

  }

  ngOnInit() {
  }



}
