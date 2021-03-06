import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  private ShipmentPort: string = null;
  private ResponsibleOfRecievingName: string = null;
  private TypeOfGoods: string = null;
  private DStreetaddress: string = null;
  public imageBlob1: any;

  public file1: any;

  public pictureName1: string = '';
  shippingForm: FormGroup;
  public language;

  constructor(public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    let lang1 = localStorage.getItem("lang");
    this.language = lang1;
    // console.log("ddddd");
    this.shippingForm = this.builder.group({
      shipmentPort: ["", [Validators.required, Validators.maxLength(120)]],
      responsibleOfRecievingName: [
        "",
        [Validators.required, Validators.maxLength(120)]
      ],
      typeOfGoods: ["", [Validators.required, Validators.maxLength(120)]],
      dStreetaddress: ["", [Validators.required, Validators.maxLength(120)]],
      "imageblob1": ['', Validators.compose([Validators.required])],

      others: [""]
    });

  }

  ngOnInit() {
  }

  shippingService() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.companyService.ShippingService(
      this.ShipmentPort,
      this.ResponsibleOfRecievingName,
      this.TypeOfGoods,
      this.DStreetaddress,
      this.file1
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
    const ctrl = this.shippingForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
