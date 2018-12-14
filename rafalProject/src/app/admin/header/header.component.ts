import { SessionService } from './../../services/shared/session.service';
import { AuthentionService } from './../../services/shared/authention.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ChangepicComponent } from '../modalcomponent/changepic/changepic.component';
import { ChangepassComponent } from '../modalcomponent/changepass/changepass.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string;
  isVisable;
  changePass: FormGroup;
  required = 'this feild requried'
  //  passmodal:Modal;
  imageSrc = '';
  imageBlob1;
  selectedFile: File = null;

  ChangProfileImgBtn = false;

  bsModalRef: BsModalRef;

  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(public router: Router, public AuthService: AuthentionService, builder: FormBuilder,
    private fb: FormBuilder, public http: HttpClientModule, private modalService: BsModalService) {





    this.userName = SessionService.userSessionData.userDetails.userName;
    let profileImaeToken = SessionService.userSessionData.userDetails.picture_url;

    if (ChangepicComponent) {

      // this.modalService.action.take(1).subscribe((value) => {
      //   console.log("ahmed :", value) // here you will get the value;


      // });

    }
    this.getProfileImageByToken(profileImaeToken)


  }

  // public _sidebarToggle() {
  //   /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
  //     this.sidebarToggle = sidebarToggle;
  //   }, error => {
  //     console.log('Error: ' + error);
  //   }); */

  //   this._globalService.data$.subscribe(data => {
  //     if (data.ev === 'sidebarToggle') {
  //       this.sidebarToggle = data.value;
  //     }
  //   }, error => {
  //     console.log('Error: ' + error);
  //   });
  //   this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


  //   //this._globalService._sidebarToggleState(!this.sidebarToggle);
  // }


  getProfileImageByToken(imageToken) {
    this.AuthService.getProfileImage(imageToken).subscribe(image => {


      this.createImageFromBlob(image)
      this.isVisable = false;

    },

      err => {

        this.isVisable = false;

        // this.alertMessage(
        //   {
        //     type: 'danger',
        //     title: 'Server Error!',
        //     value: 'Error while Set New Image'
        //   })

      })


  }
  logOut() {
    this.isVisable = true

    this.AuthService.logOut().subscribe(data => {
      SessionService.resetData();
      SessionService.clearDateFromLocalStorage();
      this.router.navigate(['home']);
      this.isVisable = false;


    }),
      err => {
        console.log("error with serveer");
      }
  }



  openProfileImgModal() {
    // this.profileImg.open()
    this.imageSrc = this.avatarImgSrc;


  }






  previewImg(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile != null) {
      this.readURL(event)

    }
  }



  // change image 
  changeProfileImage(event) {

    this.isVisable = true;

    const uploadData = new FormData();

    uploadData.append('profileimage', this.selectedFile, this.selectedFile.name);

    this.AuthService.UploadProfileImage(uploadData).subscribe(data => {

      // localStorage.setItem('imageToken',data.imageToken)



      // this.getProfileImageByToken(data.imageToken)


    }, err => {

      this.isVisable = false;

      // this.alertMessage(
      //   {
      //     type: 'danger',
      //     title: 'Server Error!',
      //     value: 'Error while Upload Image'
      //   })

    })
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
          // this.alertMessage(
          //   {
          //     type: 'danger',
          //     title: 'Server Error!',
          //     value: 'Upload A valid Image Please'
          //   })

        }

      }


      reader.readAsDataURL(file);
    }

  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.avatarImgSrc = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }


  //validate password 



  // open modal picr
  openChangePicmodal() {
    this.modalService.show(ChangepicComponent);
  }
  // open modalpass
  openChangepassmodal() {
    this.modalService.show(ChangepassComponent);
  }

}
