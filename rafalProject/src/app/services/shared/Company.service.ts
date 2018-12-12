import { settings } from './../../settings';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from "rxjs/Observable";
 



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


 

  
  GetCompany(pageSize , pageNumber , searchCriateria,type){



    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      "language":"English",
      "type":type,
      }

    
    return this.http.post(settings.DOMAIN_URL + 'companyservices/searchcompanies', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  



    
 

 
}
GetFile(filename , formname){

 
  return this.http.get(settings.DOMAIN_URL + '/adminservices/getformsfiles?filename='+filename+'&formname='+formname,   { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
    return  res.json()
  } )  



  
}

}