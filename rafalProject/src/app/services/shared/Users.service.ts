import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map, catchError, timeout, filter } from 'rxjs/operators';
import { SettingsService } from './settings.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersServices {

 
  constructor(public http: Http) {
  }


  


  GetUsers(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      
      }

       
    
    return this.http.post(SettingsService.DOMAIN_URL + 'userservices/getusersdata', data,
     { headers: SettingsService.getHeaderJsonGetMethod6() }).pipe(
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
