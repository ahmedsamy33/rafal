import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map, catchError, timeout, filter } from 'rxjs/operators';
import { SettingsService } from './settings.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: Http) { }




  // pick list company country job-title
  getPickListCCJ(type, lang): Observable<any> {
    return this.http
      .get(
        SettingsService.DOMAIN_URL +
        "picklistservices/getpicklist?type=" +
        type +
        "&language=" +
        lang
      )
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error.json());
        }),
        timeout(4000)
      )
  }

  // pick list Region
  getPickListRegion(parentcode, lang): Observable<any> {
    return this.http
      .get(
        SettingsService.DOMAIN_URL +
        "picklistservices/getregionpicklist?parentcode=" +
        parentcode +
        "&language=" +
        lang
      )
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error.json());
        }),
        timeout(4000)
      )
  }

  // pick list get countries 
  getcountriesphpicklistcodes(): Observable<any> {
    return this.http
      .get(SettingsService.DOMAIN_URL + "picklistservices/getcountriesphpicklistcodes")
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error.json());
        }),
        timeout(4000)
      )
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////
  // company upgrade services
  companyupgradeservices(data) {
    return this.http
      .post(SettingsService.DOMAIN_URL + "companyservices/companyupgrade", data, {
        headers: SettingsService.getHeaderJsonGetMethod6()
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

  // image for upgrade
  UploadCompanyCR(crimage, compid) {
    let body = new FormData();
    body.append("crimage", crimage);

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "companyservices/uploadcompanycr?compid=" +
        compid,
        body,
        { headers: SettingsService.getHeaderJsonWithTKN2() }
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


  // upload user profile image
  uploadImage(file: any) {
    let formData: FormData = new FormData();
    formData.append("profileimage", file);
    // console.log("form ", formData);

    return this.http
      .post(SettingsService.DOMAIN_URL + "userservices/uploadprofileimage", formData, {
        headers: SettingsService.getHeaderJsonWithTKN3()
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
}
