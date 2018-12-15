import { SettingsService } from './../../../../services/shared/settings.service';
import { Component, OnInit } from '@angular/core';
import { ServiceServices } from '../../../../services/shared/Services.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-chart-accounting',
  templateUrl: './chart-accounting.component.html',
  styleUrls: ['./chart-accounting.component.css']
})
export class ChartAccountingComponent implements OnInit {
  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true ;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  ImgSrc: string = 'assets/images/picture.png';


  constructor(private service: ServiceServices ,  private spinner: NgxSpinnerService , public toastr:ToastrService  ) { 

 
  }

  ngOnInit() {
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }

  loadData(pageSize  , pageNumber , searchCeritria) {
    this.spinner.show();

      this.service.get_Charter_Accounting( pageSize , pageNumber ,searchCeritria  ).subscribe(res => {

        this.tableData =res.data;
        this.dataListSize = res.size;
        this.spinner.hide();
       
        
      }
      ,err => {

        this.spinner.hide();
        this.toastr.error('Cannot Get Data', 'Server Error');

       
      })
    
  }

  pageChanged(pN: number): void {

    
    this.pageNumber = pN;
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }


  searchData(){
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
    this.searchCeritria ='';

  }

  getFiles(fileName){
    this.spinner.show();

    this.service.getFileByFormName(fileName , 'CharterAccount').subscribe(data => {
      console.log(data);
    this.spinner.hide();

      
      
    }, err => {
      console.log(err);
      
    })
  }
 
  

}
