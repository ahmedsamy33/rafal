import { AuthentionService } from './../../services/shared/authention.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../../services/shared/session.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
  public language;

  constructor(public bsModalRef: BsModalRef, private autherService: AuthentionService,
    private builder: FormBuilder, private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.comfirmPassForm = this.builder.group({
      "concode": ['', Validators.required],
      "password": ['', Validators.compose([Validators.required])],
      'confirm': ['', Validators.required]
    });
    let lang1 = localStorage.getItem("lang");
    this.language = lang1;
    // console.log(SessionService.userSessionData.userDetails.userName);

  }

  ngOnInit() {
    // console.log(this.child.phoneNumber)

  }

  confirmChangePass() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    let phone = SessionService.userSessionData.userDetails.userName;
    this.autherService.requestForgetPassword(this.conCode, phone, this.Password).subscribe(
      data => {
        // console.log(data);
        SessionService.resetData();
        this.bsModalRef.hide();
        this.spinner.hide();
        this.toastr.success('Password Changed', 'Successfully', option);

      },
      error => {
        this.toastr.error(error.errorCode, error.message, option);
        this.spinner.hide();

      }
    )
  }
}
