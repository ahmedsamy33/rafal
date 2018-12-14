import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';

@Component({
  selector: 'app-charter',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.css']
})
export class CharterComponent implements OnInit {

  accountingForm: FormGroup;
  public yearofBudget: string = null;
  public imageBlob1: any;
  public imageBlob2: any;
  public imageBlob3: any;
  public Other: string = null;
  public file1: any;
  public file2: any;
  public file3: any;
  public pictureName1: string = '';
  public pictureName2: string = '';
  public pictureName3: string = '';
  constructor(
    public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService) {
    this.accountingForm = this.builder.group({
      "yearofbudget": ['', Validators.compose([Validators.required])],
      "imageblob1": ['', Validators.compose([Validators.required])],
      "imageblob2": ['', Validators.compose([Validators.required])],
      "imageblob3": ['', Validators.compose([Validators.required])],
      "other": ['']
    });
  }

  ngOnInit() {
  }

  CharterService() {
    this.companyService.charterService(this.file1, this.file2, this.file3, this.yearofBudget).subscribe(
      data => {
        this.bsModalRef.hide();
      },
      error => {

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

      // console.log("currentName : ", currentName);
      // console.log("imageBlob1 : ", this.imageBlob1);
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
      console.log("file2 : ", this.file2);
    } else if (num == 3) {
      let reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
          const imgBlob = new Blob([reader.result], { type: file.type });
          this.file3 = imgBlob;
        };
      }
      if (this.imageBlob3 != '') {
        let currentName = this.imageBlob3.substring(
          this.imageBlob3.lastIndexOf('\\') + 1,
          this.imageBlob3.length
        );
        this.pictureName3 = currentName;
      } else {
        this.pictureName3 = '';

      }
      console.log("file3 : ", this.file3);
    }

  }
}
