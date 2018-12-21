import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from '../../../services/shared/companyservice.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../../services/shared/settings.service';

@Component({
  selector: 'app-advirtesment',
  templateUrl: './advirtesment.component.html',
  styleUrls: ['./advirtesment.component.css']
})
export class AdvirtesmentComponent implements OnInit {
  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  ImgSrc: string = './../assets/images/picture.png';
  imageToShow: any;
  AdvImgService;
  no_preview: string = 'assets/images/no-image-icon-4.png';
  constructor(private service: CompanyserviceService, private spinner: NgxSpinnerService,public toastr:ToastrService) {

    this.AdvImgService = SettingsService.DOMAIN_ImgeURLAdver;
   }
  ngOnInit() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }

  loadData(pageSize, pageNumber, searchCeritria) {
    this.spinner.show();

    this.service.GetAdds(pageSize, pageNumber, searchCeritria).subscribe(res => {


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

        this.service.toggleAds(id, status).subscribe(data => {
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

  DeleteAds(id) {

    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete!'
    }).then((result) => {
      if (result.value) {

        this.service.DeleteAds(id).subscribe(data => {
          swal(
            'Deleted!',
            'Your Advs has been deleted.',
            'success'
          );
          this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);


        }, err => {

          swal(
            'Error!',
            'Error when Delted.',
            'warning'
          );


        })

      }
    });

  }



}
