import { CertifiedComponent } from './../services/certified/certified.component';
import { HiringComponent } from './../services/hiring/hiring.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginmodalComponent } from '../loginmodal/loginmodal.component';
import { SignupmodalComponent } from '../signupmodal/signupmodal.component';
import { UpgrademodalComponent } from '../upgrademodal/upgrademodal.component';
import { CharterComponent } from '../services/charter/charter.component';
import { FeasibilityComponent } from '../services/feasibility/feasibility.component';
import { EstablishComponent } from '../services/establish/establish.component';
import { CustomsComponent } from '../services/customs/customs.component';
import { EmploymentComponent } from '../services/employment/employment.component';
import { OfficeComponent } from '../services/office/office.component';
import { TradingComponent } from '../services/trading/trading.component';
import { ShippingComponent } from '../services/shipping/shipping.component';
import { TranslateService } from '@ngx-translate/core';
import { VerfiymodalComponent } from '../verfiymodal/verfiymodal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../services/shared/companyservice.service';
import { SettingsService } from '../../services/shared/settings.service';
import { SessionService } from '../../services/shared/session.service';
import { AuthentionService } from '../../services/shared/authention.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ResetmodalComponent } from '../resetmodal/resetmodal.component';
import { UserDataService } from '../../services/shared/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public jobTitle = [];
  private Job: string = null;

  public lang;
  bsModalRef: BsModalRef;
  public Discription: string = null;
  addadvertismentForm: FormGroup;
  public imageBlob1: any;
  public imageBlob2: any;

  public imageForURl;

  public userName: string;
  public file1: any;

  public pictureName1: string = '';

  public file2: any;

  public pictureName2: string = '';

  public imaArray = [];

  public profileImage = SettingsService.imageUrlProfile;
  public imgUrl = SettingsService.DOMAIN_ImgeURLAdver;

  public userData;
  public checkDisplay;

  public userType;
  constructor(private modalService: BsModalService,
    public translate: TranslateService,
    private builder: FormBuilder,
    private companyService: CompanyserviceService,
    private AuthService: AuthentionService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private userService: UserDataService
  ) {
    this.lang = localStorage.getItem("lang");

    this.addadvertismentForm = this.builder.group({
      job: ["", Validators.required],
      "imageblob1": ['', Validators.compose([Validators.required])],

      discription: ["", Validators.required]
    });

    let lang1 = localStorage.getItem("lang");
    if (lang1 == "en") {
      lang1 = "English";
    } else {
      lang1 = "Arabic";
    }
    this.companyService.getPickListCCJ("Job_Title", lang1).subscribe(
      data => {
        // console.log(data[0].code);
        this.jobTitle = data;
      },
      error => { }
    );

    this.getAllAdver();





  }
  title = 'testproject';




  ngOnInit() {
    let token = localStorage.getItem('token');


    if (token != null && !SessionService.userSessionData.is_log) {
      this.spinner.show();
      this.AuthService.validateSession().subscribe(
        data => {
          SessionService.saveInSession(data);
          this.spinner.hide();

          SessionService.saveDataInLocalStorage(data);
          console.log(data, SessionService.userSessionData);
          localStorage.setItem("token", data.tkn);
          this.userData = SessionService.userSessionData.userDetails.picture_url;
          this.userName = data.userDetails.userName;
          let islog = SessionService.userSessionData.is_log;
          this.checkDisplay = islog;
          this.userType = SessionService.userSessionData.userDetails.type;
          console.log(this.checkDisplay);
        },
        error => {
          this.spinner.hide();

        }
      )
    } else {
      console.log(SessionService.userSessionData.userDetails.picture_url);
      this.userData = SessionService.userSessionData.userDetails.picture_url;
      let islog = SessionService.userSessionData.is_log;
      this.checkDisplay = islog;
      this.userType = SessionService.userSessionData.userDetails.type;
    }
  }


  changeLanguage(lang) {
    console.log(lang);

    this.translate.use(lang);

  }

  openmodal(componentTo) {
    // console.log(componentTo);
    let comp;
    if (componentTo == 'LoginmodalComponent') {
      comp = LoginmodalComponent;
    } else if (componentTo == 'SignupmodalComponent') {
      comp = SignupmodalComponent;
    } else if (componentTo == 'UpgrademodalComponent') {
      comp = UpgrademodalComponent;
    } else if (componentTo == 'CharterComponent') {
      comp = CharterComponent;
    } else if (componentTo == 'HiringComponent') {
      comp = HiringComponent;
    } else if (componentTo == 'FeasibilityComponent') {
      comp = FeasibilityComponent;
    } else if (componentTo == 'EstablishComponent') {
      comp = EstablishComponent;
    } else if (componentTo == 'CustomsComponent') {
      comp = CustomsComponent;
    } else if (componentTo == 'EmploymentComponent') {
      comp = EmploymentComponent;
    } else if (componentTo == 'OfficeComponent') {
      comp = OfficeComponent;
    } else if (componentTo == 'TradingComponent') {
      comp = TradingComponent;
    } else if (componentTo == 'CertifiedComponent') {
      comp = CertifiedComponent;
    } else if (componentTo == 'ShippingComponent') {
      comp = ShippingComponent;
    } else if (componentTo == 'ResetmodalComponent') {
      comp = ResetmodalComponent;
    }

    let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));

    let getUsertoken = localStorage.getItem("token");
    if (getUserVerfiy != null) {
      this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
      this.bsModalRef.content.actionVerfiy.take(1).subscribe((value) => {
        console.log("ahmed 111111111:", value) // here you will get the value;
        this.userData = value.userDetails.picture_url;
        this.userName = value.userDetails.userName;
        this.userType = value.userDetails.type;
        // console.log("ahmed :", value.userDetails.type);
        console.log(this.userData);
        let islog = true;
        this.checkDisplay = islog;
      });
    }
    else if (getUsertoken != null) {
      if (componentTo == 'LoginmodalComponent' || componentTo == 'SignupmodalComponent' || componentTo == 'ResetmodalComponent') {
        this.bsModalRef = this.modalService.show(comp, { class: 'modal-sm' });
        // to get data session from modal
        if (componentTo == 'LoginmodalComponent') {
          this.bsModalRef.content.action.take(1).subscribe((value) => {
            console.log("ahmed :", value) // here you will get the value;
            this.userData = value.userDetails.picture_url;
            this.userName = value.userDetails.userName;
            this.userType = value.userDetails.type;
            // console.log("ahmed :", value.userDetails.type);
            console.log(this.userData);
            let islog = true;
            this.checkDisplay = islog;
          });
        }




      } else {
        this.bsModalRef = this.modalService.show(comp);
      }
    } else if (getUsertoken == null) {

      if (componentTo == 'LoginmodalComponent' || componentTo == 'SignupmodalComponent') {
        this.bsModalRef = this.modalService.show(comp, { class: 'modal-sm' });
        // to get data session from modal
        if (componentTo == 'LoginmodalComponent') {
          this.bsModalRef.content.action.take(1).subscribe((value) => {
            console.log("ahmed2 :", value) // here you will get the value;
            this.userData = value.userDetails.picture_url;
            this.userName = value.userDetails.userName;
            // console.log("ahmed2 :", value.userDetails.type);
            let islog = true;
            this.checkDisplay = islog;
            this.userType = value.userDetails.type;
          });
        }
      } else {
        this.bsModalRef = this.modalService.show(LoginmodalComponent, { class: 'modal-sm' });
        if (componentTo == 'LoginmodalComponent') {
          this.bsModalRef.content.action.take(1).subscribe((value) => {
            console.log("ahmed2 :", value) // here you will get the value;
            this.userData = value.userDetails.picture_url;
            this.userName = value.userDetails.userName;
            // console.log("ahmed2 :", value.userDetails.type);
            let islog = true;
            this.checkDisplay = islog;
            this.userType = value.userDetails.type;
          });
        }
      }







    }
  }




  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }



  // add service
  addAdvertsService() {

    let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
    let getUserlogin = localStorage.getItem("token");
    if (getUserVerfiy != null) {
      this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
      this.bsModalRef.content.actionVerfiy.take(1).subscribe((value) => {
        console.log("ahmed 111111111:", value) // here you will get the value;
        this.userData = value.userDetails.picture_url;
        this.userName = value.userDetails.userName;
        this.userType = value.userDetails.type;
        // console.log("ahmed :", value.userDetails.type);
        console.log(this.userData);
        let islog = true;
        this.checkDisplay = islog;
      });
    } else if (getUserlogin == null) {
      this.bsModalRef = this.modalService.show(LoginmodalComponent, { class: 'modal-sm' });

      this.bsModalRef.content.action.take(1).subscribe((value) => {
        console.log("ahmed2 :", value) // here you will get the value;
        this.userData = value.userDetails.picture_url;
        this.userName = value.userDetails.userName;
        // console.log("ahmed2 :", value.userDetails.type);
        let islog = true;
        this.checkDisplay = islog;
        this.userType = value.userDetails.type;
      });

    } else {
      this.spinner.show();
      let option = {
        timeOut: 5000,
        progressBar: true
      }
      this.companyService.addAdvertisment(
        this.file1,
        this.Job,
        this.Discription
      ).subscribe(
        data => {
          this.toastr.success('Submitted ', 'successfully', option);

          this.addadvertismentForm.reset();
          this.pictureName1 = '';
          // this.spinner.hide();

        },
        error => {
          this.toastr.error(error.errorCode, error.message, option);

          this.spinner.hide();

        }
      );
    }
  }

  public arrays = [];
  public size = 4;




  // get all advertisment
  getAllAdver() {
    this.companyService.getalladvertienttoken().subscribe(
      data => {
        this.imaArray = data;

        while (this.imaArray.length > 0) {
          this.arrays.push(this.imaArray.splice(0, this.size));
        }
        console.log(this.arrays);


        // console.log(this.imaArray.length);

      },
      error => {
        console.log(error);
      }
    );
  }
  // get image
  processFile(event, num) {
    if (num == 1) {
      let reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsArrayBuffer(file);


        reader.onload = (e) => {

          // let img = new Image();
          // img.src = e.target.result;
          // console.log(img.width, img.height);

          // console.log(e.target.result);


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
    else if (num == 2) {
      let reader = new FileReader();
      console.log(event.target.files);

      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {

          // console.log(e.target.result);

          const imgBlob = new Blob([reader.result], { type: file.type });
          this.file2 = imgBlob;

          reader.readAsDataURL(file);
          reader.onload = (e) => {
            this.imageForURl = e.target.result;

          }
        };
      }
      if (this.imageBlob2 != '') {
        let currentName = this.imageBlob2.substring(
          this.imageBlob2.lastIndexOf('\\') + 1,
          this.imageBlob2.length
        );
        this.pictureName2 = currentName;
      } else {
        this.pictureName2 = '';

      }
    }

  }
  hasError(field: string, error: string) {
    const ctrl = this.addadvertismentForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }

  public modal;
  public Close;

  // change image(){}
  changeProfileImage() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.userService.uploadImage(this.file2).subscribe(
      data => {
        this.userData = data.imageToken;
        this.toastr.success('Image is uploaded ', 'successfully', option);

        this.spinner.hide();
        this.file2 = null;
        this.imageForURl = null;
        this.pictureName2 = '';
      },
      err => {
        this.spinner.hide();
        this.toastr.error(err.errorCode, err.message, option);

      }
    );
  }

  logOut() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.AuthService.logOut().subscribe(
      data => {
        this.toastr.success('^-^', 'Logout successfully', option);

        SessionService.clearDateFromLocalStorage();
        SessionService.resetData();

        this.spinner.hide();
        let islog = SessionService.userSessionData.is_log;
        this.checkDisplay = islog;
      },
      error => {
        this.toastr.error(error.errorCode, error.message, option);
        this.spinner.hide();

      }
    )
  }

}


