import { UsersServices } from './../../../services/shared/Users.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import Swal from 'sweetalert2'

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



  constructor(private service: UsersServices , private spinner: NgxSpinnerService ) { 

    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }

  ngOnInit() {
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }

  loadData(pageSize  , pageNumber , searchCeritria) {
    this.spinner.show()

      this.service.GetUsers(pageSize  , pageNumber , searchCeritria).subscribe(res => {

         
        this.tableData =res.data;
        this.dataListSize = res.size;
      this.spinner.hide()

       
        
      },err => {
        this.spinner.hide()

        // this.alertMessage(
        //   {
        //     type: 'danger',
        //     title: 'Server Error!',
        //     value: 'error Loading Data.'
        //   }
        // );
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
