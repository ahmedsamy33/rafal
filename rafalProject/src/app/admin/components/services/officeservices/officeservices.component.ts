import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ServiceServices } from '../../../../services/shared/Services.service';

@Component({
  selector: 'app-officeservices',
  templateUrl: './officeservices.component.html',
  styleUrls: ['./officeservices.component.css']
})
export class OfficeservicesComponent implements OnInit {
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

      this.service.GetOfficeServices( pageSize , pageNumber ,searchCeritria  ).subscribe(res => {

        this.tableData =res.data;
        this.dataListSize = res.size;
        this.spinner.hide();
       
        
      },err => {

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
    // this.searchCeritria ='';

  }

  
  
}
