import { SessionService } from './../../services/shared/session.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthentionService } from '../../services/shared/authention.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verfiymodal',
  templateUrl: './verfiymodal.component.html',
  styleUrls: ['./verfiymodal.component.css']
})
export class VerfiymodalComponent implements OnInit {

  public getSignupData;
  public Code;

  public deviceType;
  public bowerType;
  public OS;


  verfiyForm: FormGroup;

  constructor(public bsModalRef: BsModalRef,
    private autherService: AuthentionService,
    private deviceService: DeviceDetectorService,
    private builder: FormBuilder) {

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
        SessionService.saveDataInLocalStorage(data);
        SessionService.clearsinginSaveData();
        localStorage.removeItem("userSignupData");
        this.bsModalRef.hide()
      },
      error => {
        console.log(error);

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
    this.autherService.ResendCode(this.getSignupData.userName).subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);

      }
    );
  }
}
