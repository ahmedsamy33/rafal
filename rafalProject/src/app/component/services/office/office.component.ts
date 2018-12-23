import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  private Address: string = null;
  private RentingOffices: string = null;
  private OfficeFurniture: string = null;
  private Devices: string = null;
  private Cameras: string = null;
  private Inks: string = null;
  private Papers: string = null;
  private WebDesign: string = null;
  private DMarketing: string = null;
  private Others: string = null;
  OfficeForm: FormGroup;

  constructor(public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    // console.log("ddddd");
    this.OfficeForm = this.builder.group({
      address: ["", [Validators.required, Validators.maxLength(120)]],
      rentingOffices: ["", [Validators.required, Validators.maxLength(120)]],
      officeFurniture: ["", [Validators.required, Validators.maxLength(120)]],
      devices: ["", [Validators.required, Validators.maxLength(120)]],
      cameras: ["", [Validators.required, Validators.maxLength(120)]],
      inks: ["", [Validators.required, Validators.maxLength(120)]],
      papers: ["", [Validators.required, Validators.maxLength(120)]],
      webDesign: ["", [Validators.required, Validators.maxLength(120)]],
      dMarketing: ["", [Validators.required, Validators.maxLength(120)]],
      others: [""]
    });
  }

  ngOnInit() {
  }
  OfficeService() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    let data = {
      address: this.Address,
      rentingOffices: this.RentingOffices,
      officeFurnuture: this.OfficeFurniture,
      devices: this.Devices,
      cameras: this.Cameras,
      inks: this.Inks,
      papers: this.Papers,
      webDesigns: this.WebDesign,
      degitalMarketting: this.DMarketing,
      other: this.Others
    };

    this.companyService.officeserv(data).subscribe(
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


  hasError(field: string, error: string) {
    const ctrl = this.OfficeForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
