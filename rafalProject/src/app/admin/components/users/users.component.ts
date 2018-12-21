import { UsersServices } from './../../../services/shared/Users.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

 import swal from 'sweetalert2';

import { ToastrService } from 'ngx-toastr';
import { settings } from 'cluster';
import { SettingsService } from '../../../services/shared/settings.service';

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
  
  no_preview: string = 'assets/images/no-image-icon-4.png';
  imageToShow: any;
  profileImgSerivce = SettingsService.imageUrlProfile;



  constructor(private service: UsersServices, private spinner: NgxSpinnerService, private toastr: ToastrService) {


  }

  ngOnInit() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }

  loadData(pageSize, pageNumber, searchCeritria) {
    this.spinner.show()

    this.service.GetUsers(pageSize, pageNumber, searchCeritria).subscribe(res => {


      this.tableData = res.data;
      this.dataListSize = res.size;
      console.log(this.dataListSize);
      this.spinner.hide()



    }, err => {
      this.spinner.hide()

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

  toggleActive(id, status) {
    let text = '';

    if (status == true) {
      text = 'Activate'
    }
    else {
      text = ' DeActivate'

    }
    swal({
      title: 'Are you sure?',
      text: 'You will ' + text + ' this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: text
    }).then((result) => {
      if (result.value) {

        this.service.toggleUser(id, status).subscribe(data => {
          swal(
            text,
            'Your Advs has been ' + text,
            'success'
          );
          this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);


        }, err => {

          swal(
            'Error!',
            'Error when ' + text,
            'warning'
          );


        })

      }
    });


  }

}
