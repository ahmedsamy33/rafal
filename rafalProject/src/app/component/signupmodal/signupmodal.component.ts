import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginmodalComponent } from './../loginmodal/loginmodal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentionService } from '../../services/shared/authention.service';
import { VerfiymodalComponent } from '../verfiymodal/verfiymodal.component';
import { UserDataService } from '../../services/shared/user-data.service';
import { SessionService } from '../../services/shared/session.service';

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
    private userService: UserDataService) {
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
    let data = {
      code: this.contryCode,
      userName: this.phoneNumber,
      Password: this.Password,
      Name: this.Name,
      nationalId: this.nationalId
    }
    this.autherService.signup(data).subscribe(
      data => {
        SessionService.singinSaveData(this.phoneNumber, this.Password, this.contryCode)
        this.openverfiy();
        console.log(data);

      },
      error => {
        console.log(error);

      }
    )

  }

  getCountryCode() {

    this.userService.getcountriesphpicklistcodes().subscribe(
      data => {
        console.log(data);
        this.countries = data;
        this.contryCode = this.countries[0];
      },
      error => {

      }
    )


  }

}
