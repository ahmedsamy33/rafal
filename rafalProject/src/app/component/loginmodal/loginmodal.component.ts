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

  constructor(public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private autherService: AuthentionService,
    private builder: FormBuilder, private userService: UserDataService,
    private deviceService: DeviceDetectorService, private spinner: NgxSpinnerService,
    private router: Router) {
    this.loginForm = this.builder.group({
      "phonen": ['', Validators.compose([Validators.required])],
      'pass': ['', Validators.required],
      "countrycode": ['', Validators.required],
    });
    this.getCountryCode();

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

    console.log(this.loginForm);
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
        console.log(data);
        SessionService.saveDataInLocalStorage(data);
        // console.log();

        this.bsModalRef.hide();
        this.spinner.hide();
        if (data.userDetails.type == 'Company') {
          this.router.navigate(['layout/Users']);
        }


      },
      error => {
        console.log(error);
        this.spinner.hide();

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
