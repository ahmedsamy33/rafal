import { UsersServices } from './../../../services/shared/Users.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
   
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  ImgSrc: string = 'assets/images/picture.png';
  imageToShow: any;



  constructor(private service: UsersServices , private spinner: NgxSpinnerService , private toastr: ToastrService) { 

    
  }

  ngOnInit() {
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }

  loadData(pageSize  , pageNumber , searchCeritria) {
    this.spinner.show()

      this.service.GetUsers(pageSize  , pageNumber , searchCeritria).subscribe(res => {

        
        this.tableData =res.data;
        this.dataListSize = res.size;
        console.log(this.dataListSize);
          this.spinner.hide()

       
        
      },err => {
        this.spinner.hide()

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
