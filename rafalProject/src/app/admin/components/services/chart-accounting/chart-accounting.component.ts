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
  loading = true;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  ImgSrc: string = 'assets/images/picture.png';


  constructor(private service: ServiceServices,
    private spinner: NgxSpinnerService,
    public toastr: ToastrService) {


  }

  ngOnInit() {
    this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
  }

  loadData(pageSize, pageNumber, searchCeritria) {
    this.spinner.show();

    this.service.get_Charter_Accounting(pageSize, pageNumber, searchCeritria).subscribe(res => {

      this.tableData = res.data;
      this.dataListSize = res.size;


      this.spinner.hide();


    }
      , err => {

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
    this.searchCeritria = '';

  }

  // getFiles(fileName, id) {
  //   this.spinner.show();

  //   let thefile = {};
  //   this.service.getImage(fileName, 'CharterAccount')
  //   .subscribe(data => {
  //     console.log(data);

  //   // .subscribe(data => thefile = new Blob([data], { type: "application/octet-stream" }),    
  //   //                   error => console.log("Error downloading the file."),
  //   //                 () => console.log('Completed file download.',thefile));

  //     let url = window.URL.createObjectURL(thefile);
  //     window.open(url);
       
  //     // this.spinner.hide();

  //     // let bikeImage = document.getElementById(id) as HTMLImageElement;


  //     // var objectURL = URL.createObjectURL(data);
  //     // bikeImage.src = objectURL;



  //     // var w = window.open("");
  //     // w.document.write(bikeImage.outerHTML);

  //     // w.focus();



  //     //  var url = window.URL.createObjectURL(data);
  //     // var a = document.createElement('a');
  //     // document.body.appendChild(a);
  //     // a.setAttribute('style', 'display: none');
  //     // a.href = url;
  //     // a.download = data.;
  //     // a.click();
  //     // window.URL.revokeObjectURL(url);
  //     // a.remove(); // remove the element



  //   }, err => {
  //     console.log(err , 'eeeeeeeeror');

  //   })
  // }


  getFiles(fileName, id) {
    this.spinner.show();

    this.service.getImage(fileName, 'CharterAccount').subscribe(data => {
       
      this.spinner.hide();

      // let bikeImage = document.getElementById(id) as HTMLImageElement;


      // var objectURL = URL.createObjectURL(data);
      // bikeImage.src = objectURL;

      const a = document.createElement('a');
      a.href = URL.createObjectURL(data);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove()


      // var w = window.open("");
      // w.document.write(bikeImage.outerHTML);

      // w.focus();




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


  downloadfile(type: string){

    // let thefile = {};
    // this.pservice.downloadfile(this.rundata.name, type)
    //     .subscribe(data => thefile = new Blob([data], { type: "application/octet-stream" }), //console.log(data),
    //                 error => console.log("Error downloading the file."),
    //                 () => console.log('Completed file download.'));

    // let url = window.URL.createObjectURL(thefile);
    // window.open(url);
}

}
