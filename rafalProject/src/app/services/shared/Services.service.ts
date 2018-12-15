import { catchError, timeout, map } from 'rxjs/operators';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
import { SettingsService } from './settings.service';
import { throwError, Observable } from 'rxjs';





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// General Classes /////////////////////////////////////////////



/*
  Generated class for the Services provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceServices {


  constructor(public http: Http) {
  }


  userLogin(userName: string, password: string) {
    let data = {
      "countryPhoneCode": "+2",
      "userName": userName,
      "password": password,
      "deviceType": "desktop",
      "browserType": "chrome",
      "osType": "windows",
      "timeZone": "GMT+0200",
      "language": "English",
      "location": "Egypt",
      "isMobileApp": false,
      "appName": "xx",
      "notificationId": "cccc"
    };
    return this.http.post(SettingsService.DOMAIN_URL + 'userservices/signin', data, { headers: SettingsService.getHeaderJson() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }




  get_Charter_Accounting(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": parseInt(pageSize),
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria
    }

    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/getcharteraccounting', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }





  GetEstablishCompnies(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
      "language": "English"
    }

    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/getestablishcompnies', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }




  GetFeasabilityStudy(pageSize, pageNumber, searchCriateria) {
    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
      "language": "English"
    }

    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/getfesabilitystudy', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }

  GetCustomClearance(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,

    }
    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/getcustomclearance', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }





  GetOfficeServices(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
      "language": "English"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/getofficeservices', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }

  GetTradingAgencies(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
      "language": "English"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/gettradingagencies', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }
  GetCertifiedTranslations(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
      "language": "English"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/getcertifiedtranslations', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }




  GetShippings(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
      "language": "English"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'adminservices/getshippings', data, { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }


  GetHiringLabors(pageSize, pageNumber, jobTitleCode) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "jobTitleCode": jobTitleCode,
      "language": "English"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'formservices/searchhiringlabors', data, { headers: SettingsService.getHeaderJsonGetMethod() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }
  GetEmployment(pageSize, pageNumber, jobTitleCode) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "jobTitleCode": jobTitleCode,
      "language": "English"
    }
    return this.http.post(SettingsService.DOMAIN_URL + 'formservices/searchemployments', data, { headers: SettingsService.getHeaderJsonGetMethod() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }



  getJobTitlePickList() {
    return this.http.get(SettingsService.DOMAIN_URL + 'picklistservices/getpicklist?type=Job_Title&language=English').pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }



  getFileByFormName(fileName, formname): Observable<any> {
    return this.http.get(SettingsService.DOMAIN_URL + 'adminservices/getformsfiles?filename=' + fileName + '&formname=' + formname, { headers: SettingsService.getHeaderJsonWithTKN() }).pipe(
      map(res => {
        return res
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
  }


  getImage(fileName, formname): Observable<Blob> {
    // return this.http.get(imageUrl, { responseType: ResponseContentType.Blob })
    //     .map((res: Response) => res.blob());



    return this.http.get(SettingsService.DOMAIN_URL + 'adminservices/getformsfiles?filename=' + fileName + '&formname=' + formname, { headers: SettingsService.getHeaderJsonWithTKN(), responseType: ResponseContentType.Blob }).pipe(
      map((res: Response) => res.blob()),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )


  }


}
