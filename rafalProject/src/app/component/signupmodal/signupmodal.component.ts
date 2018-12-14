import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginmodalComponent } from './../loginmodal/loginmodal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentionService } from '../../services/shared/authention.service';
import { VerfiymodalComponent } from '../verfiymodal/verfiymodal.component';
import { UserDataService } from '../../services/shared/user-data.service';
import { SessionService } from '../../services/shared/session.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signupmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.css']
})
export class SignupmodalComponent implements OnInit {
  private Password: string = null;
  private phoneNumber: string = null;
  private Name: string = null;
  private nationalId: string = null;
  private confirmPassword: string = null;

  private countries = [];
  private contryCode: string;
  signupForm: FormGroup;
  constructor(public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private autherService: AuthentionService,
    private builder: FormBuilder,
    private userService: UserDataService, private spinner: NgxSpinnerService, private toastr: ToastrService) {
    console.log("ddddd");
    this.signupForm = this.builder.group({
      "phonen": ['', Validators.compose([Validators.required])],
      "name": ['', Validators.compose([Validators.required])],
      "national": ['', Validators.compose([Validators.required])],
      "password": ['', Validators.compose([Validators.required])],
      "countrycode": ['', Validators.required],
      'confirm': ['', Validators.required]
    });
    this.getCountryCode();
  }
  ngOnInit() {
  }

  openloginmodal() {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(LoginmodalComponent, { class: 'modal-sm' });
  }
  openverfiy() {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  }
  signUp() {
    console.log(this.signupForm);
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    let data = {
      code: this.contryCode,
      userName: this.phoneNumber,
      Password: this.Password,
      Name: this.Name,
      nationalId: this.nationalId
    }
    this.autherService.signup(data).subscribe(
      data => {
        this.toastr.success('Sign up successfully!', 'Done', option);
        this.spinner.hide();

        SessionService.singinSaveData(this.phoneNumber, this.Password, this.contryCode)
        this.openverfiy();
        console.log(data);

      },
      error => {

        if (error.errorCode == "4000") {
          this.toastr.error(error.errorCode, error.message, option);

        } else if (error.errorCode == "4001") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4002") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4003") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4004") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4005") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4006") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4007") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4009") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4010") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4011") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4012") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4013") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4014") {
          // this.toastr.error(error.errorCode, error.message, option);

          this.openverfiy();
        } else if (error.errorCode == "4015") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4016") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4018") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4023") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4037") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4041") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4043") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "4044") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "1013") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "3004") {
          this.toastr.error(error.errorCode, error.message, option);
        } else if (error.errorCode == "3009") {
          this.toastr.error(error.errorCode, error.message, option);
        }
        this.spinner.hide();

      }
    )

  }

  getCountryCode() {
    this.spinner.show();

    this.userService.getcountriesphpicklistcodes().subscribe(
      data => {
        console.log(data);
        this.countries = data;
        this.contryCode = this.countries[0];
        this.spinner.hide();

      },
      error => {
        this.spinner.hide();

      }
    )


  }

}
