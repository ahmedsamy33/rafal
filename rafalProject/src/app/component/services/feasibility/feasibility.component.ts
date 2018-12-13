import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';

@Component({
  selector: 'app-feasibility',
  templateUrl: './feasibility.component.html',
  styleUrls: ['./feasibility.component.css']
})
export class FeasibilityComponent implements OnInit {
  public countryArr = [];
  public CompanyArr = [];
  public RegionArr = [];

  private Country: string = null;
  private Region: string = null;
  private Address: string = null;
  private Activity: string = null;
  private CompType: string = null;
  private Capital: string = null;

  FeasibilityForm: FormGroup;

  constructor(public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService

  ) {
    console.log("ddddd");
    this.FeasibilityForm = this.builder.group({
      country: ["", Validators.required],
      region: ["", Validators.required],
      address: ["", [Validators.required, Validators.maxLength(120)]],
      activity: ["", [Validators.required, Validators.maxLength(30)]],
      compType: ["", Validators.required],
      capital: ["", Validators.required]
    });

    let lang = localStorage.getItem("lang");
    if (lang == "en") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.companyService.getPickListCCJ("Country", lang).subscribe(
      data => {
        this.countryArr = data;
      },
      error => { }
    );
    this.companyService.getPickListCCJ("Company", lang).subscribe(
      data => {
        this.CompanyArr = data;
      },
      error => { }
    );
  }

  ngOnInit() {
  }

  FeasibilityService() {
    let data = {
      countryCode: this.Country,
      companyTypeCode: this.CompType,
      activity: this.Activity,
      detailedAdress: this.Address,
      capitalCurrency: this.Capital,
      province: this.Region
    };

    this.companyService.fesabilitystudy(data).subscribe(
      data => {
        this.bsModalRef.hide();
      },
      error => {

      }
    );
  }

  getRegionValue() {
    let lang = localStorage.getItem("lang");
    if (lang == "en") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.RegionArr = [];
    this.Region = "";
    if (this.Country != null) {

      this.companyService.getPickListRegion(this.Country, lang).subscribe(
        data => {
          this.RegionArr = data;
        },
        error => {
        }
      );
    }
  }
  hasError(field: string, error: string) {
    const ctrl = this.FeasibilityForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }

}