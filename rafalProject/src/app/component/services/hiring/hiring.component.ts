import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {

  public jobTitle = [];
  public RegionArr = [];

  private Active: string = null;
  private Job: string = null;
  private Region: string = null;
  private Age: string = null;
  private Skills: string = null;
  private NoYears: string = null;
  private DailyHours: string = null;
  private Salary: string = null;
  private StatusOfVisa: string = 'Available';
  private RequireQualification: string = null;
  private Others: string = null;

  hiringForm: FormGroup;
  public ageFlag: boolean;
  public dayFlag: boolean;

  constructor(
    public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService, private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    console.log("ddddd");
    this.hiringForm = this.builder.group({
      active: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(30)]
      ],
      job: ["", Validators.required],
      region: ["", Validators.required],
      age: [
        "",
        [
          Validators.required,
          Validators.maxLength(2)
          // Validators.pattern("^d+$")
        ]
      ],
      skills: ["", Validators.required],
      noYears: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
      ],
      dailyHours: ["", Validators.required],
      salary: ["", [Validators.required, Validators.minLength(4)]],
      statusOfVisa: ["", Validators.required],
      requireQualification: ["", Validators.required],
      others: [""]
    });


    let lang = localStorage.getItem("lang");
    if (lang == "en") {
      lang = "English";
    } else {
      lang = "Arabic";
    }
    this.companyService.getPickListCCJ("Job_Title", lang).subscribe(
      data => {
        // console.log(data[0].code);
        this.jobTitle = data;
        this.Job = this.jobTitle[0].code;
      },
      error => { }
    );

    this.companyService.getPickListRegion("EGY", lang).subscribe(
      data => {
        // console.log("ddd", data);
        this.RegionArr = data;
        this.Region = this.RegionArr[0].code;
      },
      error => { }
    );
  }



  ngOnInit() {
  }



  hiringService() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    let data = {
      activity: this.Active,
      region: this.Region,
      jobTitleCode: this.Job,
      age: this.Age,
      yearsOfExperience: this.NoYears,
      visaStatus: this.StatusOfVisa,
      dailyWorkHours: this.DailyHours,
      salary: this.Salary,
      requiredQualifications: this.RequireQualification,
      skills: this.Skills,
      other: this.Others
    };

    this.companyService.hiringService(data).subscribe(
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
    const ctrl = this.hiringForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }

  calDayHour() {
    if (parseInt(this.DailyHours) > 16) {
      this.dayFlag = true;
    } else {
      this.dayFlag = false;
    }
  }
  calAge() {
    if (parseInt(this.Age) > 17 && parseInt(this.Age) <= 70) {
      this.ageFlag = false;
    } else {
      this.ageFlag = true;
    }
  }
}
