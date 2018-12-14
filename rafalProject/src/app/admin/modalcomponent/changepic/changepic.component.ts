import { AuthentionService } from './../../../services/shared/authention.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from '../../../services/shared/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepic',
  templateUrl: './changepic.component.html',
  styleUrls: ['./changepic.component.css']
})
export class ChangepicComponent implements OnInit {

  @Output() url= new EventEmitter;

  imageSrc = '';
 
  selectedFile: File = null;

  ChangProfileImgBtn = false;
  


  constructor(public bsModalRef: BsModalRef,public AuthService:AuthentionService , public spinner:NgxSpinnerService , public toastr :ToastrService) {

  }

  ngOnInit() {
  }


  // change image 
  changeProfileImage(event) {
    this.spinner.show()

    const uploadData = new FormData();

    uploadData.append('profileimage', this.selectedFile, this.selectedFile.name);

    this.AuthService.UploadProfileImage(uploadData).subscribe(data => {
     
    this.spinner.hide()
    this.bsModalRef.hide()
    SessionService.userSessionData.userDetails.picture_url = data.imageToken;  
    this.url.emit(data.imageToken)

      
 


    }, err => {
      this.spinner.hide()
    this.bsModalRef.hide()
this.imageSrc = '';
      this.toastr.error(err , "server Error");

    })
  }




  previewImg(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile != null) {
      this.readURL(event)

    }
  }

 
  readURL(event): void {
    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();
      const file = event.target.files[0];
      reader.onload = e => {

        this.imageSrc = reader.result;
        this.ChangProfileImgBtn = true;

        if (!this.imageSrc.startsWith('data:image')) {
          this.ChangProfileImgBtn = false;
          this.toastr.warning('Upload a Valid Image');

        }

      }


      reader.readAsDataURL(file);
    }

  }

}
