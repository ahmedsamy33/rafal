import { SessionService } from './../../services/shared/session.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthentionService } from '../../services/shared/authention.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-verfiymodal',
  templateUrl: './verfiymodal.component.html',
  styleUrls: ['./verfiymodal.component.css']
})
export class VerfiymodalComponent implements OnInit {
  @Output() actionVerfiy = new EventEmitter();

  public getSignupData;
  public Code;

  public deviceType;
  public bowerType;
  public OS;


  verfiyForm: FormGroup;

  constructor(public bsModalRef: BsModalRef,
    private autherService: AuthentionService,
    private deviceService: DeviceDetectorService,
    private builder: FormBuilder, private spinner: NgxSpinnerService, private toastr: ToastrService) {

    this.verfiyForm = this.builder.group({

      "code": ['', Validators.required],
    });
    console.log("ddddd");
    let data = JSON.parse(localStorage.getItem("userSignupData"));
    this.getSignupData = data;

    console.log(this.getSignupData);


    this.DeviceTypeFunction()

  }

  ngOnInit() {
  }

  verfiyEmail() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    let lang = localStorage.getItem("lang");
    if (lang == "en") {
      lang = "English";
    } else {
      lang = "Arabic";
    }

    this.autherService.userVerifyCode(
      this.Code,
      this.getSignupData.userName,
      this.getSignupData.password,
      lang,
      this.bowerType,
      this.OS,
      this.getSignupData.countryPhoneCode,
      this.deviceType
    ).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Login successfully!', 'Welcome', option);
        this.actionVerfiy.emit(data);
        console.log(data);
        localStorage.setItem('type', data.userDetails.type);

        SessionService.saveDataInLocalStorage(data);
        SessionService.clearsinginSaveData();
        localStorage.removeItem("userSignupData");
        this.bsModalRef.hide();
        this.spinner.hide();

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
    );
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

  resendCode() {
    this.spinner.show();

    this.autherService.ResendCode(this.getSignupData.userName).subscribe(
      data => {
        // console.log(data);
        this.spinner.hide();

      },
      error => {
        // console.log(error);
        this.spinner.hide();

      }
    );
  }
}
