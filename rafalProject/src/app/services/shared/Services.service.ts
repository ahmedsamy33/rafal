import { settings } from './../../settings';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
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
export class ServiceServices {


  constructor(public http: Http) {
  }


  userLogin(userName: string, password: string): Observable<any> {
    let data = {
        "countryPhoneCode": "+2",
        "userName":userName,
        "password":password,
        "deviceType": "desktop",
        "browserType": "chrome",
        "osType": "windows",
        "timeZone": "GMT+0200",
        "language": "English",
        "location":"Egypt",
        "isMobileApp": false,
        "appName" : "xx",
        "notificationId":"cccc"
    };
    return this.http.post(settings.DOMAIN_URL + 'userservices/signin', data, { headers: settings.getHeaderJson() }).map( (res:Response) => {
      return  res.json()
    } )  
      // .catch( err => { return err });
      // return this.http.get('http://jsonplaceholder.typicode.com/users')
  }
  /////////////////////////////////////////////////////////////////////////////////////////
 

  get_Charter_Accounting(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":parseInt(pageSize),
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria
    }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/getcharteraccounting', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }


  

  
  GetEstablishCompnies (pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      "language" :"English"
      }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/getestablishcompnies', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }


  GetFeasabilityStudy(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      "language" :"English"
      }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/getfesabilitystudy', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }



  GetCustomClearance(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
     
      }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/getcustomclearance', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }

  
  GetOfficeServices(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      "language" :"English"
     
      }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/getofficeservices', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }
  

  GetTradingAgencies(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      "language" :"English"
     
      }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/gettradingagencies', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }

 
  GetCertifiedTranslations(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      "language" :"English"
     
      }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/getcertifiedtranslations', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }



  GetShippings(pageSize , pageNumber , searchCriateria){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "searchCriateria": searchCriateria,
      "language" :"English"
     
      }

    
    return this.http.post(settings.DOMAIN_URL + 'adminservices/getshippings', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }


  
  GetHiringLabors(pageSize , pageNumber , jobTitleCode){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "jobTitleCode": jobTitleCode,
      "language" :"English"
     
      }

    
    return this.http.post(settings.DOMAIN_URL + 'formservices/searchhiringlabors', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }

  GetEmployment(pageSize , pageNumber , jobTitleCode){

    let data = {
      "pageSize":pageSize,
      "pageNumber":pageNumber ,
      "jobTitleCode": jobTitleCode,
      "language" :"English"
     
      }

    
    return this.http.post(settings.DOMAIN_URL + 'formservices/searchemployments', data, { headers: settings.getHeaderJsonGetMethod() }).map( (res:Response) => {
      return  res.json()
    } )  


  }



  

  getJobTitlePickList(){
    return this.http.get(settings.DOMAIN_URL + 'picklistservices/getpicklist?type=Job_Title&language=English').map( (res:Response) => {
      return  res.json()
    } )  

  }
  public handelError(error: Response){
    
    console.log(error);
    
    return Observable.throw(error)
    
  
  }

}
