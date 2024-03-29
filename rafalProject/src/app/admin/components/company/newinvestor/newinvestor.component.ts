import { Component, OnInit } from '@angular/core';
import { CompanyServices } from '../../../../services/shared/Company.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../../../services/shared/settings.service';

@Component({
  selector: 'app-newinvestor',
  templateUrl: './newinvestor.component.html',
  styleUrls: ['./newinvestor.component.css']
})
export class NewinvestorComponent implements OnInit {
  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;
  companyType = 'Inverst';
  no_preview: string = 'assets/images/no-image-icon-4.png';


  ImgSrc: string = 'assets/images/picture.png';
  ImageService = SettingsService.imageUrlCompany;

  constructor(private service: CompanyServices, private spinner: NgxSpinnerService , public toastr:ToastrService) { }

  ngOnInit() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }

  loadData(pageSize, pageNumber, searchCeritria) {
    this.spinner.show();

    this.service.GetCompany(pageSize, pageNumber, searchCeritria, this.companyType).subscribe(res => {

      this.tableData = res.data;
      this.dataListSize = res.size;
      this.spinner.hide();


    }, err => {
      this.spinner.hide();
      this.toastr.error('Cannot Get Data', 'Server Error');
    })



  }

  pageChanged(pN: number): void {


    this.pageNumber = pN;
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }

  searchData() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    // this.searchCeritria ='';

  }

}
