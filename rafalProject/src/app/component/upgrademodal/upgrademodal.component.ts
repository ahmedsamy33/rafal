import { UserDataService } from './../../services/shared/user-data.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upgrademodal',
  templateUrl: './upgrademodal.component.html',
  styleUrls: ['./upgrademodal.component.css']
})
export class UpgrademodalComponent implements OnInit {
  public company;

  public countryArr = [];
  public CompanyArr = [];

  public RegionArr2 = [];
  mydForm: FormGroup;
  public CompanyName;
  public CountryCode;
  public InvestmentCountryCode;
  public WebsiteLink;
  public InvestnentType;
  // public Type; //upgrade to
  public ExpireDate;
  public Capital;
  public Mail;

  public Activity;
  public Nationality;
  public Investor;



  public imageBlob1: any;

  public file1: any;

  public pictureName1: string = '';

  constructor(public bsModalRef: BsModalRef, public UserService: UserDataService,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    console.log("ddddd");
    console.log(this.company);


    this.mydForm = this.builder.group({
      Company: ["", Validators.required],
      countryCode: ["", Validators.required],
      companyName: ["", [Validators.required, Validators.maxLength(30)]],
      expireDate: ["", Validators.required],
      websiteLink: ["", [Validators.required, Validators.maxLength(30)]],
      mail: ["", [Validators.required, Validators.pattern(
        "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"), Validators.maxLength(30)]],
      activity: ["", Validators.required],
      nationality: ["", Validators.required],
      investmentCountryCode: ["", Validators.required],
      investor: ["", Validators.required],
      investnentType: ["", Validators.required],
      capital: ["", Validators.required],
      "imageblob1": ['', Validators.compose([Validators.required])],

    });

    let lang = localStorage.getItem("lang");
    if (lang == "en") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.UserService.getPickListCCJ("Country", lang).subscribe(
      data => {
        this.countryArr = data;
        this.RegionArr2=data;
        // this.CountryCode=this.countryArr[0].code;
      },
      error => { }
    );

    this.UserService.getPickListCCJ("Company", lang).subscribe(
      data => {
        this.CompanyArr = data;
        this.company = this.CompanyArr[0].code;
      },
      error => { }
    );





  }

  ngOnInit() {
  }



  upgradeService() {
    let data = {};
    console.log("ah,e", this.company == 'Esta');

    if (this.company == 'Esta') {
      // establish
      data = {
        companyName: this.CompanyName,
        countryCode: this.CountryCode,
        investmentCountryCode: "",
        websiteLink: this.WebsiteLink,
        investnentType: "",
        type: this.company,
        expireDate: this.ExpireDate,
        capital: "",
        mail: this.Mail
      };

    } else if (this.company == 'Inverst') {
      // Investor form
      data = {
        companyName: "",
        countryCode: this.Nationality,
        investmentCountryCode: this.Investor,
        websiteLink: "",
        investnentType: this.InvestnentType,
        type: this.company,
        expireDate: null,
        capital: this.Capital,
        mail: this.Mail
      };

    } else if (this.company == 'Inter') {
      // inter compny form
      data = {
        companyName: this.CompanyName,
        countryCode: this.Nationality,
        investmentCountryCode: this.InvestmentCountryCode,
        websiteLink: this.WebsiteLink,
        investnentType: this.Activity,
        type: this.company,
        expireDate: null,
        capital: "",
        mail: this.Mail
      };


    }


    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }


    this.UserService.companyupgradeservices(data).subscribe(
      data => {
        console.log(data.id);
        this.UserService.UploadCompanyCR(this.file1, data.id).subscribe(
          data => {
            this.bsModalRef.hide();
            this.spinner.hide();
            this.toastr.success('Upgraded  ', 'successfully', option);
          },
          error => {
            this.spinner.hide();
            this.toastr.error(error.errorCode, error.message, option);
          }
        );
      },
      error => {

      }
    );


  }

  // get region for new
  getRegionValue2() {
    let lang = localStorage.getItem("lang");
    if (lang == "en") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.RegionArr2 = [];
    this.InvestmentCountryCode = "";
    if (this.Nationality != null) {

      this.UserService.getPickListRegion(this.Nationality, lang)
        .subscribe(
          data => {
            this.RegionArr2 = data;
            // console.log(this.RegionArr2);
          },
          error => {
          }
        );
    }
  }


  // get image
  processFile(event, num) {
    if (num == 1) {
      let reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
          const imgBlob = new Blob([reader.result], { type: file.type });
          this.file1 = imgBlob;
        };
      }
      if (this.imageBlob1 != '') {
        let currentName = this.imageBlob1.substring(
          this.imageBlob1.lastIndexOf('\\') + 1,
          this.imageBlob1.length
        );
        this.pictureName1 = currentName;
      } else {
        this.pictureName1 = '';

      }
    }

  }


  hasError(field: string, error: string) {
    const ctrl = this.mydForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }


}
