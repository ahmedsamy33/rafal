import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map, catchError, timeout, filter } from 'rxjs/operators';
import { SettingsService } from './settings.service';
import { throwError } from 'rxjs';

 

export class UsersServices {

 
  constructor(public http: Http) {
  }


  



  
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

}
