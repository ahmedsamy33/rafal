import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmPasswordComponent } from '../confirm-password/confirm-password.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentionService } from '../../services/shared/authention.service';
import { SessionService } from '../../services/shared/session.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetmodal',
  templateUrl: './forgetmodal.component.html',
  styleUrls: ['./forgetmodal.component.css']
})
export class ForgetmodalComponent implements OnInit {
  public language;

  public phoneNumber: string = null;
  forgetForm: FormGroup;
  constructor(public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private autherService: AuthentionService,
    private builder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    let lang1 = localStorage.getItem("lang");
    this.language = lang1;
    this.forgetForm = this.builder.group({
      "phonen": ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  openforgetPasswordConfirmmodal() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.autherService.forgetPassword(this.phoneNumber).subscribe(
      data => {
        SessionService.userSessionData.userDetails.userName = this.phoneNumber;
        // console.log(SessionService.userSessionData.userDetails.userName);
        this.bsModalRef.hide();
        this.bsModalRef = this.modalService.show(ConfirmPasswordComponent, { class: 'modal-sm' });
        this.spinner.hide();

      },
      error => {
        this.toastr.error(error.errorCode, error.message, option);

        this.spinner.hide();


      }
    )
  }
}
