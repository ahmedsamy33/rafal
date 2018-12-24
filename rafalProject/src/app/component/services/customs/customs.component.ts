import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.css']
})
export class CustomsComponent implements OnInit {

  public imageBlob1: any;
  public imageBlob2: any;
  public Other: string = null;
  public file1: any;
  public file2: any;
  public pictureName1: string = '';
  public pictureName2: string = '';
  private ShipmentPort: string = null;
  private ShipmentDescription: string = null;
  private Others: string = null;

  customsForm: FormGroup;
  public language;

  constructor(public bsModalRef: BsModalRef, private builder: FormBuilder,
    private companyService: CompanyserviceService, private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
      let lang1 = localStorage.getItem("lang");
      this.language = lang1;
    // console.log("ddddd");
    this.customsForm = this.builder.group({
      "imageblob1": ['', Validators.compose([Validators.required])],
      "imageblob2": ['', Validators.compose([Validators.required])],
      shipmentPort: ["", [Validators.required, Validators.maxLength(120)]],
      shipmentDescription: ["", [Validators.required, Validators.maxLength(120)]],
      "others": ['']
    });
  }

  ngOnInit() {
  }


  customsService() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.companyService.CustomClearanceService(
      this.ShipmentPort,
      this.ShipmentDescription,
      this.Others,
      this.file1,
      this.file2
    ).subscribe(
      data => {
        this.bsModalRef.hide();
        this.spinner.hide();
        this.toastr.success('Uploaded ', 'successfully', option);
      },
      error => {
        this.spinner.hide();
        this.toastr.error(error.errorCode, error.message, option);
      }
    );
  }
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

    } else if (num == 2) {

      let reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
          const imgBlob = new Blob([reader.result], { type: file.type });
          this.file2 = imgBlob;
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
    const ctrl = this.customsForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }



}
