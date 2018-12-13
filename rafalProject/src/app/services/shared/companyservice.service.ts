import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from "rxjs";
import { map, catchError, timeout, filter } from 'rxjs/operators';
import { SettingsService } from './settings.service';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(private http: Http) { }


  // / formservices/add charter Service
  charterService(accountyear, bank, company, yearofbudget) {
    let body = new FormData();
    body.append("accOfYear", accountyear);
    body.append("bankOfYear", bank);
    body.append("companyAcc", company);
    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "formservices/addcharteracc?yearofbudget=" +
        yearofbudget,
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


  // Hiring laborartory services
  hiringService(service) {
    let data = service;
    return this.http
      .post(SettingsService.DOMAIN_URL + "formservices/addhiringlabors", data, {
        headers: SettingsService.getHeaderJsonWithTKN2()
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

  //fesability study services
  fesabilitystudy(service) {
    return this.http
      .post(SettingsService.DOMAIN_URL + "formservices/addfesabilitystudy", service, {
        headers: SettingsService.getHeaderJsonWithTKN2()
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

  // formservices/add office services
  officeserv(service) {
    return this.http
      .post(SettingsService.DOMAIN_URL + "formservices/addofficeserv", service, {
        headers: SettingsService.getHeaderJsonWithTKN2()
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

  // formservices/add  Establishing Service
  establishingService(
    countrycode,
    activity,
    region,
    capitalcurrency,
    other,
    idsimage,
    authorizationimage,
    agreementimage
  ) {
    let body = new FormData();
    body.append("idsimage", idsimage);
    body.append("authorizationimage", authorizationimage);
    body.append("agreementimage", agreementimage);
    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "formservices/addestablishcompany?countrycode=" +
        countrycode +
        "&activity=" +
        activity +
        "&region=" +
        region +
        "&capitalcurrency=" +
        capitalcurrency +
        "&other=" +
        other,
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

  // formservices/add  Employment Service
  EmploymentService(activity, jobtitle, salary, filetype, cv) {
    let body = new FormData();
    body.append("cv", cv);

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "formservices/addemplyment?activity=" +
        activity +
        "&jobtitle=" +
        jobtitle +
        "&salary=" +
        salary +
        "&filetype=" +
        filetype,
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

  // formservices/add   Custom Clearance Service
  CustomClearanceService(
    shipmentport,
    shipmentdescription,
    other,
    shipmentbill,
    authorization
  ) {
    let body = new FormData();
    body.append("shipmentbill", shipmentbill);
    body.append("authorization", authorization);

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "formservices/addcustomclearance?shipmentport=" +
        shipmentport +
        "&shipmentdescription=" +
        shipmentdescription +
        "&other=" +
        other,
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

  // formservices/add   Trading agency Service
  TradingagencyService(
    activity,
    requiredband,
    productdesc,
    location,
    other,
    productimge
  ) {
    let body = new FormData();
    body.append("productimge", productimge);

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "formservices/addtradingagency?activity=" +
        activity +
        "&requiredband=" +
        requiredband +
        "&productdesc=" +
        productdesc +
        "&location=" +
        location +
        "&other=" +
        other,
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

  // formservices/Add Shipping Service
  ShippingService(
    shipmentport,
    responsablename,
    goodstype,
    streetadress,
    billauthorizationimge
  ) {
    let body = new FormData();
    body.append("billauthorizationimge", billauthorizationimge);

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "formservices/addshipping?shipmentport=" +
        shipmentport +
        "&responsablename=" +
        responsablename +
        "&goodstype=" +
        goodstype +
        "&streetadress=" +
        streetadress,
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

  // formservices/Add Certified Translation
  CertifiedService(
    translationtype,
    language,
    responsiblereceiver,
    other,
    filetype,
    translationfile
  ) {
    let body = new FormData();
    body.append("translationfile", translationfile);

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "formservices/addcertifiedtranslation?translationtype=" +
        translationtype +
        "&language=" +
        language +
        "&responsiblereceiver=" +
        responsiblereceiver +
        "&other=" +
        other +
        "&filetype=" +
        filetype,
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
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  // company upgrade services
  companyupgradeservices(data) {
    return this.http
      .post(SettingsService.DOMAIN_URL + "companyservices/companyupgrade", data, {
        headers: SettingsService.getHeaderJsonGetMethod()
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
  /////////////////////////////////////////////////////////////////////////////////.

  //add advertisment
  addAdvertisment(adimage, title, description) {
    let body = new FormData();
    body.append("adimage", adimage);

    return this.http
      .post(
        SettingsService.DOMAIN_URL +
        "advertisementservices/addadvertisement?title=" +
        title +
        "&description=" +
        description,
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


  // get all advertient token
  getalladvertienttoken(): Observable<any> {
    return this.http
      .get(SettingsService.DOMAIN_URL + "advertisementservices/getadds")
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

  // get image by  token
  getimagebytoken(token): Observable<any> {
    return this.http
      .get(
        SettingsService.DOMAIN_URL +
        "advertisementservices/getaddimage?imgetkn=" +
        token
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
          return throwError(error.json());
        }),
        timeout(4000)
      )
  }



  GetAdds(pageSize, pageNumber, searchCriateria) {

    let data = {
      "pageSize": pageSize,
      "pageNumber": pageNumber,
      "searchCriateria": searchCriateria,
    }


    return this.http.post(SettingsService.DOMAIN_URL + 'advertisementservices/searchadds', data, { headers: SettingsService.getHeaderJsonGetMethod() }).map((res: Response) => {
      return res.json()
    })


  }


  DeleteAds(id) {


    return this.http.delete(SettingsService.DOMAIN_URL + 'advertisementservices/deleteadd?addid=' + id, { headers: SettingsService.getHeaderJsonGetMethod() }).map((res: Response) => {
      return res.json()
    })


  }


  toggleAds(id, status) {


    return this.http.put(SettingsService.DOMAIN_URL + 'advertisementservices/updateadd?isactive=' + status + '&addid=' + id, null, { headers: SettingsService.getHeaderJsonWithTKN() }).map((res: Response) => {
      return res.json()
    })


  }

  getImageByToken(token) {

    let contentHeaders = new Headers();
    contentHeaders.append("imgetkn", token);



    return this.http.get(SettingsService.DOMAIN_URL + 'advertisementservices/getaddimage?imgetkn=' + token, { headers: token, responseType: ResponseContentType.Blob }).map((res: Response) => {
      return res.blob()
    })

  }

}
