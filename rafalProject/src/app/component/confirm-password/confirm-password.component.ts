import { AuthentionService } from './../../services/shared/authention.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgetmodalComponent } from '../forgetmodal/forgetmodal.component';
import { SessionService } from '../../services/shared/session.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  // @ViewChild(ForgetmodalComponent) child;
  private conCode: string = null;

  private Password: string = null;
  private confirmPassword: string = null;
  comfirmPassForm: FormGroup;

  constructor(public bsModalRef: BsModalRef, private autherService: AuthentionService,
    private builder: FormBuilder) {
    this.comfirmPassForm = this.builder.group({
      "concode": ['', Validators.required],
      "password": ['', Validators.compose([Validators.required])],
      'confirm': ['', Validators.required]
    });
    // console.log(SessionService.userSessionData.userDetails.userName);

  }

  ngOnInit() {
    // console.log(this.child.phoneNumber)

  }

  confirmChangePass() {
    let phone = SessionService.userSessionData.userDetails.userName;
    this.autherService.requestForgetPassword(this.conCode, phone, this.Password).subscribe(
      data => {
        console.log(data);
        SessionService.resetData();
        this.bsModalRef.hide();

      },
      error => {
        console.log(error);

      }
    )
  }
}
