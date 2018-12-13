import { Component, OnInit } from '@angular/core';
import { CompanyServices } from '../../../../services/shared/Company.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-internationalcompany',
  templateUrl: './internationalcompany.component.html',
  styleUrls: ['./internationalcompany.component.css']
})
export class InternationalcompanyComponent implements OnInit {
  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;
  companyType = 'Inter';

  ImgSrc: string = 'assets/images/picture.png';
  constructor(private service: CompanyServices, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }
  loadData(pageSize, pageNumber, searchCeritria) {
    this.spinner.show();

    this.service.GetCompany(pageSize, pageNumber, searchCeritria, this.companyType).subscribe(res => {

      this.tableData = res.data;
      this.dataListSize = res.size;
      this.loading = false;
      this.spinner.hide();


    }
      , err => {
        this.spinner.hide();

        // this.alertMessage(
        //   {
        //     type: 'danger',
        //     title: 'Server Error!',
        //     value: 'error Loading Data.'
        //   }
        // );
        this.loading = false;
      })

  }

  pageChanged(pN: number): void {


    this.pageNumber = pN;
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }


  searchData() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    this.searchCeritria = '';

  }

}
