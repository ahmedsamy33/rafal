import { Component, OnInit } from '@angular/core';
import { CompanyServices } from '../../../../services/shared/Company.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-establishedcompany',
  templateUrl: './establishedcompany.component.html',
  styleUrls: ['./establishedcompany.component.css']
})
export class EstablishedcompanyComponent implements OnInit {
  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;
  companyType = 'Esta'

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


    }, err => {

      // this.alertMessage(
      //   {
      //     type: 'danger',
      //     title: 'Server Error!',
      //     value: 'error Loading Data.'
      //   }
      // );
      this.spinner.hide();

      this.loading = false;
    })



  }

  pageChanged(pN: number): void {


    this.pageNumber = pN;
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }

  searchData() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);

  }
}
