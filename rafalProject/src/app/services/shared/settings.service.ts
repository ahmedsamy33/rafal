import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public static DOMAIN_URL = "http://localhost:8080/Dolphin_Services/";
  public static DOMAIN_ImgeURLAdver = "http://localhost:8080/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";
  public static imageUrlProfile =
    "http://localhost:8080/Dolphin_Services/userservices/getprofileimage?imgetkn=";
  // "http://rafalgroups.com/Dolphin_Services/userservices/getprofileimage?imgetkn=";
  constructor() { }


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
}
