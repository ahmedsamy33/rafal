import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { SettingsService } from './settings.service';
import { throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// General Classes /////////////////////////////////////////////



/*
  Generated class for the Services provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CompanyServices {


  constructor(public http: Http) {
  }





  GetCompany(pageSize, pageNumber, searchCriateria, type) {



    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
      "language": "English",
      "type": type,
    }

    return this.http.post(SettingsService.DOMAIN_URL + 'companyservices/searchcompanies', data, { headers: SettingsService.getHeaderJsonGetMethod() }).pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return throwError(error.json());
      }),
      timeout(4000)
    )
}
   




GetFile(filename , formname){
   return this.http.get(SettingsService.DOMAIN_URL + '/adminservices/getformsfiles?filename='+filename+'&formname='+formname,   { headers: SettingsService.getHeaderJsonGetMethod() }).pipe(
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

 