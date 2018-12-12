import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from "rxjs";
import { map, catchError, timeout, filter } from 'rxjs/operators';
import { SettingsService } from './settings.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentionService {

  constructor(private http: Http) { }
  // /////////////////////////////////////////////////////////////////////////////////////////
  // login service
  Signin(data): Observable<any> {
    let dataObject = {
      "countryPhoneCode": data.code,
      "userName": data.userName,
      "password": data.password,
      "deviceType": data.deviceType,
      "browserType": data.bowerType,
      "osType": data.OS,
      "timeZone": "GMT+0200",
      "language": data.lang,
      "location": "Egypt",
      "isMobileApp": false,
      "appName": "Rafal Group WebSite",
      "notificationId": "cccc"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'userservices/signin',
      dataObject, { headers: SettingsService.getHeaderJson() })
      .pipe(
        map(res => {

          // console.log("userData : ", res)
          return res.json();
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error.json());
        }),
        timeout(4000)
      )

  }
  // /////////////////////////////////////////////////////////////////////////////////////////
  // signup service
  signup(data): Observable<any> {
    let dataObject = {

      "countryPhoneCode": data.code,
      "userName": data.userName,
      "passWord": data.Password,
      "name": data.Name,
      "nationalId": data.nationalId,
      "notificationId": "gggg"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'userservices/signup',
      dataObject, { headers: SettingsService.getHeaderJson() })
      .pipe(
        map(res => {

          // console.log("userData : ", res)
          return res.json();
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error.json());
        }),
        timeout(4000)
      )

  }
  // /////////////////////////////////////////////////////////////////////////////////////////
  // forget pass
  forgetPassword(userName: string): Observable<any> {

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "userservices/forgetpassword?username=" +
        userName,
        { headers: SettingsService.getHeaderJsonGetMethod() }
      )
      .pipe(
        map(res => {

          // console.log("userData : ", res)
          return res.json();
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error.json());
        }),
        timeout(4000)
      )

  }
  // /////////////////////////////////////////////////////////////////////////////////////////
  // request pass
  requestForgetPassword(verificationcode: string, username: string, newpassword: string): Observable<any> {
    let data = new URLSearchParams();
    data.set("verificationcode", verificationcode);
    data.set("username", username);
    data.set("newpassword", newpassword);
    let body = data.toString();

    return this.http
      .post(SettingsService.DOMAIN_URL + "userservices/resetpasswordforget", body, {
        headers: SettingsService.getHeaderXWFORM()
      })
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return throwError(error.json());
        }),
        timeout(4000)
      )

  }

  // /////////////////////////////////////////////////////////////////////////////////////////

  userVerifyCode(
    verifyCode: string,
    userName: string,
    password: string,
    lang: string,
    browserType,
    osType,
    countryPhoneCode,
    devicetype
    // nationalId
  ): Observable<any> {
    let data = {
      userName: userName,
      password: password,
      deviceType: devicetype,
      browserType: browserType,
      osType: osType,
      timeZone: "GMT+0200",
      language: lang,
      location: "Egypt",
      isMobileApp: true,
      // nationalId: nationalId,
      countryPhoneCode: countryPhoneCode,
      appName: "Rafal Group WebSite"
    };
    return this.http
      .put(
        SettingsService.DOMAIN_URL +
        "userservices/mobilevalidate?verificationcode=" +
        verifyCode,
        data,
        { headers: SettingsService.getHeaderJson() }
      )
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return throwError(error.json());
        }),
        timeout(4000)
      )
  }
  // /////////////////////////////////////////////////////////////////////////////////////////
  ResendCode(userPhone: string): Observable<any> {
    return this.http
      .get(
        SettingsService.DOMAIN_URL + "userservices/resendcode?username=" + userPhone
      )
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return throwError(error.json());
        }),
        timeout(4000)
      )
  }
  // /////////////////////////////////////////////////////////////////////////////////////////
  changePassword(oldpass, newpass): Observable<any> {
    return this.http
      .put(SettingsService.DOMAIN_URL + "userservices/changepassword", null, {
        headers: SettingsService.getHeaderJsonFormData(oldpass, newpass)
      })
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return throwError(error.json());
        }),
        timeout(4000)
      )
  }

  // /////////////////////////////////////////////////////////////////////////////////////////
  logOut(): Observable<any> {
    let options = new RequestOptions({
      headers: SettingsService.getHeaderJsonWithTKN()
    });

    return this.http
      .post(SettingsService.DOMAIN_URL + "userservices/logout", null, options)
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return throwError(error.json());
        }),
        timeout(4000)
      )
  }

  // /////////////////////////////////////////////////////////////////////////////////////////
  validateSession(): Observable<any> {
    return this.http
      .post(SettingsService.DOMAIN_URL + "usersessionservices/validatesession", null, {
        headers: SettingsService.getHeaderJsonWithTKN()
      })
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return throwError(error.json());
        }),
        timeout(4000)
      )
  }

  UploadProfileImage(imageBlob){

    return this.http.post(SettingsService.DOMAIN_URL + 'userservices/uploadprofileimage', imageBlob,{headers : SettingsService.getHeaderJsonWithTKN()} )
    .pipe(
      map(res => {
        return res.blob();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
    
  }

  getProfileImage(imageUrl: string) {
    return this.http.get(SettingsService.DOMAIN_URL + 'userservices/getprofileimage?imgetkn='+imageUrl ,  { responseType: ResponseContentType.Blob })
    // .map((res: Response) => res.blob());
    .pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  
  }

}
