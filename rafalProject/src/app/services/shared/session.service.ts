import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }


  public static userSessionData = {
    tkn: "",
    language: "",
    userDetails: {
      userId: 0,
      phone: "",
      picture_url: null,
      type: "",
      userName: "",
      blocked: false,
      resetPasswordNeeded: false,
      validMobile: false,
      gender: null,
      numOfVerification: 0,
      notificationId: null,
      numOfNotifications: null,
      status: null,
      language: null,
      cityCountryService: false,
      notificationService: false
    },
    is_log: false
  };

  public static signupData = {
    userName: "",
    password: "",
    countryPhoneCode: ""
    // nationalId: ""
  };

  private static getDate;


  static saveDataInLocalStorage(data) {
    SessionService.userSessionData = data;
    SessionService.userSessionData.is_log = true;
    localStorage.setItem(
      "token",
      data.tkn
    );
  }
  static saveInSession(data) {
    SessionService.userSessionData = data;
    SessionService.userSessionData.is_log = true;
  }

  static getDataFromLocalstorage() {
    SessionService.userSessionData.tkn = JSON.parse(localStorage.getItem("token"));
  }

  static clearDateFromLocalStorage() {
    localStorage.removeItem("token");
  }

  static singinSaveData(userName, pass, countryPhoneCode) {
    this.signupData.userName = userName;
    this.signupData.password = pass;
    this.signupData.countryPhoneCode = countryPhoneCode;
    localStorage.setItem("userSignupData", JSON.stringify(this.signupData));
  }

  static clearsinginSaveData() {
    SessionService.signupData = {
      userName: "",
      password: "",
      countryPhoneCode: ""
    };
  }

  static resetData() {
    SessionService.userSessionData = {
      tkn: "",
      language: "",
      userDetails: {
        userId: 0,
        phone: "",
        picture_url: null,
        type: "",
        userName: "",
        blocked: false,
        resetPasswordNeeded: false,
        validMobile: false,
        gender: null,
        numOfVerification: 0,
        notificationId: null,
        numOfNotifications: null,
        status: null,
        language: null,
        cityCountryService: false,
        notificationService: false
      },
      is_log: false
    };
  }

}
