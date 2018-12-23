import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  private Activity: string = null;
  private job: string = null;
  private Salary: string = null;
  employmentForm: FormGroup;
  public fileExtension: string = "";
  public jobTitle = [];
  public imageBlob1: any;

  public file1: any;

  public pictureName1: string = '';

  constructor(public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService


  ) {
    // console.log("ddddd");

    this.employmentForm = this.builder.group({
      activity: ["", [Validators.required, Validators.maxLength(30)]],
      job: ["", Validators.required],
      salary: ["", [Validators.required, Validators.minLength(4)]],
      "imageblob1": ['', Validators.compose([Validators.required])],

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
      },
      error => { }
    );

  }

  ngOnInit() {
  }
  employmentService() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.companyService.EmploymentService(
      this.Activity,
      this.job,
      this.Salary,
      this.fileExtension,
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
    const ctrl = this.employmentForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}
