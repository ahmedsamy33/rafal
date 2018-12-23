import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceServices } from './../../../../services/shared/Services.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../../../services/shared/settings.service';

@Component({
  selector: 'app-employmentadmin',
  templateUrl: './employmentadmin.component.html',
  styleUrls: ['./employmentadmin.component.css']
})
export class EmploymentadminComponent implements OnInit {
  tableData: Array<any>;
  JobTitle: Array<any>;
  jobTitleCode = '';
  dataListSize = 0;
  loading = true;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;


  ImgSrc: string = 'assets/images/picture.png';

  imgService = SettingsService.imageUrlProfile
  constructor(private service: ServiceServices, private spinner: NgxSpinnerService, public toastr: ToastrService) {


  }

  ngOnInit() {
    this.getPickList()
    this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);


    // console.log(this.imgService);

  }


  getPickList() {
    this.service.getJobTitlePickList().subscribe(data => {
      this.JobTitle = data;

    })

  }
  loadData(pageSize, pageNumber, jobTitleCode) {
    this.spinner.show();

    this.service.GetEmployment(pageSize, pageNumber, jobTitleCode).subscribe(res => {

      this.tableData = res.data;
      this.dataListSize = res.size;
      // console.log(this.tableData);

      this.spinner.hide();


    }, err => {

      this.spinner.hide();
      this.toastr.error('Cannot Get Data', 'Server Error');
    })



  }

  pageChanged(pN: number): void {


    this.pageNumber = pN;
    this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
  }

  searchData() {
    this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
    // this.searchCeritria ='';

  }



  getFiles(fileName, id) {
    this.spinner.show();


    this.service.getImage(fileName, 'Employment').subscribe(data => {
      // console.log(data);

      this.spinner.hide();


      const a = document.createElement('a');
      a.href = URL.createObjectURL(data);
      a.download = id;
      document.body.appendChild(a);
      a.click();
      a.remove()



    }, err => {
      console.log(err);

    })
  }

  downloadFile(data) {
    // const blob = new Blob([data], { type: 'text/csv' });
    // const url = window.URL.createObjectURL(blob);
    // window.open(url);
    // window.focus();


    var url = window.URL.createObjectURL(data);
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = data.filename;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element
  }


}
