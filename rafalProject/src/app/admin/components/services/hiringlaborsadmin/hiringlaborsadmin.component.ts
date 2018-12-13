import { Component, OnInit } from '@angular/core';
import { ServiceServices } from '../../../../services/shared/Services.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hiringlaborsadmin',
  templateUrl: './hiringlaborsadmin.component.html',
  styleUrls: ['./hiringlaborsadmin.component.css']
})
export class HiringlaborsadminComponent implements OnInit {

  tableData: Array<any>;
  JobTitle: Array<any>;
  jobTitleCode = '';
  dataListSize = 0;
  loading = true ;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;


  ImgSrc: string = 'assets/images/picture.png';


  constructor(private service: ServiceServices ,  private spinner: NgxSpinnerService , public toastr:ToastrService  ) { 

 
  }

  ngOnInit() {
    this.getPickList()
    this.loadData(this.pageSize , this.pageNumber ,this.jobTitleCode );
  }


  getPickList(){
    this.service.getJobTitlePickList().subscribe(data =>{
      this.JobTitle = data;
      
    })

  }
  loadData(pageSize  , pageNumber , jobTitleCode) {
    this.spinner.show();

      this.service.GetHiringLabors( pageSize , pageNumber ,jobTitleCode  ).subscribe(res => {

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
    this.loadData(this.pageSize , this.pageNumber ,this.jobTitleCode );
  }

  searchData(){
    this.loadData(this.pageSize , this.pageNumber ,this.jobTitleCode );
    // this.searchCeritria ='';

  }

 
  
openUrl(url){

  var URL = url;

  window.open(URL,'_blank');

}

}
