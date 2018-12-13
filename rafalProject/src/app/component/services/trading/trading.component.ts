import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit {
  private Activity: string = null;
  private RequiredBrand: string = null;
  private Location: string = null;
  private ProductDescription: string = null;
  private Others: string = null;

  public imageBlob1: any;

  public file1: any;

  public pictureName1: string = '';

  tradingForm: FormGroup;

  constructor(public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private companyService: CompanyserviceService

  ) {
    console.log("ddddd");
    this.tradingForm = this.builder.group({
      activity: ["", [Validators.required, Validators.maxLength(50)]],
      requiredBrand: ["", [Validators.required, Validators.maxLength(50)]],
      location: ["", [Validators.required, Validators.maxLength(120)]],
      productDescription: [
        "",
        [Validators.required, Validators.maxLength(120)]
      ],
      "imageblob1": ['', Validators.compose([Validators.required])],
      others: [""]
    });
  }

  ngOnInit() {
  }
  tradingService() {

    this.companyService.TradingagencyService(
      this.Activity,
      this.RequiredBrand,
      this.ProductDescription,
      this.Location,
      this.Others,
      this.file1
    ).subscribe(
      data => {
        this.bsModalRef.hide();
      },
      error => {

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
    const ctrl = this.tradingForm.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }
}