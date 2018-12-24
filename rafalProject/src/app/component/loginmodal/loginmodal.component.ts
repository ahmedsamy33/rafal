import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ForgetmodalComponent } from '../forgetmodal/forgetmodal.component';
import { SignupmodalComponent } from '../signupmodal/signupmodal.component';
import { VerfiymodalComponent } from '../verfiymodal/verfiymodal.component';
import { AuthentionService } from '../../services/shared/authention.service';
import { FormGroup, FormBuilder, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import { UserDataService } from '../../services/shared/user-data.service';
import { SessionService } from '../../services/shared/session.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit {
  @Output() action = new EventEmitter();
  private Password: string = null;
  private phoneNumber: string = null;
  loginForm: FormGroup;
  private countries = [];
  private contryCode: string;


  public deviceType;
  public bowerType;
  public OS;
  public language;

  constructor(public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private autherService: AuthentionService,
    private builder: FormBuilder, private userService: UserDataService,
    private deviceService: DeviceDetectorService, private spinner: NgxSpinnerService,
    private router: Router, private toastr: ToastrService) {
    this.loginForm = this.builder.group({
      "phonen": ['', Validators.compose([Validators.required])],
      'pass': ['', Validators.required],
      "countrycode": ['', Validators.required],
    });
    this.getCountryCode();
    let lang1 = localStorage.getItem("lang");
    this.language = lang1;
    this.DeviceTypeFunction()


  }

  ngOnInit() {
  }

  openforgetmodal() {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(ForgetmodalComponent, { class: 'modal-sm' });
  }

  opensignupmodal() {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(SignupmodalComponent, { class: 'modal-sm' });
  }

  openverfiy() {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  }

  loginData() {

    // console.log(this.loginForm);
    let lang;
    if (localStorage.getItem('lang') == 'en') {
      lang = "English"
    } else {
      lang = "Arabic"

    }
    let data = {
      "userName": this.phoneNumber,
      "password": this.Password,
      "lang": lang,
      "code": this.contryCode,
      "deviceType": this.deviceType,
      "bowerType": this.bowerType,
      "OS": this.OS
    }
    this.spinner.show();
    this.autherService.Signin(data).subscribe(
      data => {
        this.action.emit(data);
        // console.log(data);
        SessionService.saveDataInLocalStorage(data);
        // console.log();
        localStorage.setItem('type', data.userDetails.type);
        this.bsModalRef.hide();
        this.spinner.hide();
        // console.log(data.userDetails.type)

        if (data.userDetails.type == 'SUPERADMIN' || data.userDetails.type == 'ADMIN' ) {
          this.router.navigate(['layout/Users']);
        // console.log(data.userDetails.type)

        }

        let option = {
          timeOut: 5000,
          progressBar: true
        }
        this.toastr.success('Login successfully!', 'Welcome', option);
      },
      error => {
        let option = {
          timeOut: 5000,
          progressBar: true
        }
        console.log(error);


        if (error.errorCode == "4000") {
          SessionService.singinSaveData(this.phoneNumber, this.Password, this.contryCode);
          this.openverfiy();
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
          this.toastr.error(error.errorCode, error.message, option);
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

    this.userService.getcountriesphpicklistcodes().subscribe(
      data => {
        // console.log(data);
        this.countries = data;
        this.contryCode = this.countries[0];
      },
      error => {

      }
    )


  }


  DeviceTypeFunction() {
    let deviceInfo = this.deviceService.getDeviceInfo();
    let isMobile = this.deviceService.isMobile();
    let isTablet = this.deviceService.isTablet();
    let isDesktopDevice = this.deviceService.isDesktop();

    if (isMobile) {
      this.deviceType = "Mobile"
    } else if (isTablet) {
      this.deviceType = "Tablet"
    } else if (isDesktopDevice) {
      this.deviceType = "DesktopDevice"
    }
    this.bowerType = deviceInfo.browser + '-' + deviceInfo.browser_version;
    this.OS = deviceInfo.os + '-' + deviceInfo.os_version;
  }


}
