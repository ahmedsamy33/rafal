import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-certified',
  templateUrl: './certified.component.html',
  styleUrls: ['./certified.component.css']
})
export class CertifiedComponent implements OnInit {
  private TypeOfTranslate: string = null;
  private ToLang: string = null;
  private ResponsibleOfRecieving: string = null;

  private Others: string = null;
  certifiedForm: FormGroup;
  public fileExtension: string = "";
  public imageBlob1: any;

  public file1: any;
  public language;

  public pictureName1: string = '';

  public arrayLang = [];
  public arrayTypeLang = [];
  constructor(public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService

  ) {
    let lang1 = localStorage.getItem("lang");
    this.language = lang1;
    // console.log("ddddd");
    this.certifiedForm = this.builder.group({
      typeOfTranslate: ["", Validators.required],
      toLang: ["", Validators.required],
      responsibleOfRecieving: ["", [Validators.required, Validators.maxLength(120)]],
      "imageblob1": ['', Validators.compose([Validators.required])],

      others: [""]
    });


    let langLocal = localStorage.getItem("lang");
    if (langLocal == "en") {
      langLocal = "English";
    } else {
      langLocal = "Arabic";
    }
    this.companyService.getPickListCCJ("Language", langLocal).subscribe(
      data => {
        this.arrayLang = data;
        this.ToLang = this.arrayLang[0].code;
      },
      error => {
        console.log(error);
      }
    );
    this.companyService.getPickListCCJ("Translation_Type", langLocal).subscribe(
      data => {
        this.arrayTypeLang = data;
        this.TypeOfTranslate = this.arrayTypeLang[0].code;
      },
      error => {
        console.log(error);
      }
    );

  }
  ngOnInit() {
  }


  Certified() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.companyService.CertifiedService(
      this.TypeOfTranslate,
      this.ToLang,
      this.ResponsibleOfRecieving,
      this.Others,
      this.fileExtension,
      this.file1
    ).subscribe(
      data => {
        this.toastr.success('Uploaded ', 'successfully', option);
        this.spinner.hide();

        this.bsModalRef.hide();

      },
      error => {
        this.spinner.hide();
        this.toastr.error(error.errorCode, error.message, option);


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

        this.fileExtension = currentName.substring(
          currentName.lastIndexOf('.') + 1,
          currentName.length
        );

        // console.log("ssss : ", this.fileExtension)
      } else {
        this.pictureName1 = '';
        this.fileExtension = '';
      }
    }

  }
  hasError(field: string, error: string) {
    const ctrl = this.certifiedForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }

}
