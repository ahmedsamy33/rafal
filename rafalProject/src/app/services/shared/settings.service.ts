import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { SessionService } from './session.service';

import { map, catchError, timeout } from 'rxjs/operators';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public static DOMAIN_URL =
    // "http://rafalgroups.com/Dolphin_Services/";
    "http://localhost:8080/Dolphin_Services/";
  public static DOMAIN_ImgeURLAdver =
    // "http://rafalgroups.com/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";

    "http://localhost:8080/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";



  public static imageUrlCompany =
    // "http://rafalgroups.com/Dolphin_Services/companyservices/getcompanyimage?imgetkn=";

    'http://localhost:8080/Dolphin_Services/companyservices/getcompanyimage?imgetkn='

  public static imageUrlProfile =
    // "http://rafalgroups.com/Dolphin_Services/userservices/getprofileimage?imgetkn=";

    "http://localhost:8080/Dolphin_Services/userservices/getprofileimage?imgetkn=";
  // "http://rafalgroups.com/Dolphin_Services/userservices/getprofileimage?imgetkn=";
  constructor(public http: Http) { }




  static getHeaderJson(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append('Content-Type', 'application/json');

    return contentHeaders;
  }

  static getHeaderJsonFormData(oldpass, newpass): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append('oldpassword', oldpass);
    contentHeaders.append('newpassword', newpass);
    contentHeaders.append('tkn', SessionService.userSessionData.tkn);

    return contentHeaders;
  }


  static getHeaderJsonGetMethod(): Headers {
    let contentHeaders = new Headers();

    return contentHeaders;
  }

  static getHeaderJsonGetMethod2(): Headers {
    let contentHeaders = new Headers();

    return contentHeaders;
  }

  static getHeaderJsonGetMethod6(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append("Content-Type", "application/json");
    contentHeaders.append('tkn', SessionService.userSessionData.tkn);
    return contentHeaders;

  }

  static getHeaderJsonWithTKN(): Headers {

    let contentHeaders = new Headers();


    contentHeaders.append('tkn', SessionService.userSessionData.tkn);

    return contentHeaders;
  }

  static getHeaderJsonWithTKN2(): Headers {

    let contentHeaders = new Headers();

    contentHeaders.append('tkn', SessionService.userSessionData.tkn);

    return contentHeaders;
  }

  static getHeaderXWFORM(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    return contentHeaders;
  }

  static getHeaderJsonWithTKNImgeUpload(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    return contentHeaders;
  }
  static getHeaderJsonWithTKN3(): Headers {
    let contentHeaders = new Headers();
    // console.log(sessionData.userSessionData.tkn);

    contentHeaders.append("tkn", SessionService.userSessionData.tkn);
    contentHeaders.append("Accept", "application/json");

    return contentHeaders;
  }
}
