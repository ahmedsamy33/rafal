import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceServices } from './../../../../services/shared/Services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shippingadmin',
  templateUrl: './shippingadmin.component.html',
  styleUrls: ['./shippingadmin.component.css']
})
export class ShippingadminComponent implements OnInit {
  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  ImgSrc: string = 'assets/images/picture.png';


  constructor(private service: ServiceServices, private spinner: NgxSpinnerService, public toastr: ToastrService) {


  }
  ngOnInit() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }

  loadData(pageSize, pageNumber, searchCeritria) {
    this.spinner.show();
    this.loading = true;

    this.service.GetShippings(pageSize, pageNumber, searchCeritria).subscribe(res => {

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



  getFiles(fileName) {
    this.spinner.show();

    this.service.getImage(fileName, 'Shipping').subscribe(data => {
    
       
      this.spinner.hide();
 

      const a = document.createElement('a');
      a.href = URL.createObjectURL(data);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove()


    
    }, err => {
      console.log(err);

    })
  }

  public imageToShow;
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }

    return image
  }
}


