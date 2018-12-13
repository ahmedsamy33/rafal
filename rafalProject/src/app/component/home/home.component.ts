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

  public file1: any;

  public pictureName1: string = '';
  public imaArray = [];

  public imgUrl = SettingsService.DOMAIN_ImgeURLAdver;

  constructor(private modalService: BsModalService,
    public translate: TranslateService,
    private builder: FormBuilder,
    private companyService: CompanyserviceService

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
    }

    let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));

    let getUsertoken = localStorage.getItem("token");
    if (getUserVerfiy != null) {
      this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
    }
    else if (getUsertoken != null) {
      if (componentTo == 'LoginmodalComponent' || componentTo == 'SignupmodalComponent') {
        this.bsModalRef = this.modalService.show(comp, { class: 'modal-sm' });
      } else {
        this.bsModalRef = this.modalService.show(comp);
      }
    } else if (getUsertoken == null) {

      if (componentTo == 'LoginmodalComponent' || componentTo == 'SignupmodalComponent') {
        this.bsModalRef = this.modalService.show(comp, { class: 'modal-sm' });
      } else {
        this.bsModalRef = this.modalService.show(LoginmodalComponent, { class: 'modal-sm' });
      }
    }
  }

  // openSignup() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(SignupmodalComponent, { class: 'modal-sm' });
  //   }
  // }

  // openUpGrade() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(UpgrademodalComponent);
  //   }
  // }
  // openCharterModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(CharterComponent);
  //   }
  // }

  // openHiringModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(HiringComponent);
  //   }
  // }

  // openFeasibilityModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(FeasibilityComponent);
  //   }
  // }

  // openEstablishingModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(EstablishComponent);
  //   }
  // }

  // openCustomsModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(CustomsComponent);
  //   }
  // }

  // openEmploymentModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(EmploymentComponent);
  //   }
  // }
  // openOfficeModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(OfficeComponent);
  //   }
  // }
  // openTradingModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(TradingComponent);
  //   }
  // }
  // openCertifiedModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(CertifiedComponent);
  //   }
  // }
  // openShippingModal() {
  //   let getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
  //   if (getUserVerfiy != null) {
  //     this.bsModalRef = this.modalService.show(VerfiymodalComponent, { class: 'modal-sm' });
  //   } else {
  //     this.bsModalRef = this.modalService.show(ShippingComponent);
  //   }
  // }


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
    } else if (getUserlogin == null) {
      this.bsModalRef = this.modalService.show(LoginmodalComponent, { class: 'modal-sm' });
    } else {
      this.companyService.addAdvertisment(
        this.file1,
        this.Job,
        this.Discription
      ).subscribe(
        data => {
          this.addadvertismentForm.reset();
          this.pictureName1 = '';
        },
        error => {

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
        reader.readAsDataURL(file);


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

  }
  hasError(field: string, error: string) {
    const ctrl = this.addadvertismentForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }


}

