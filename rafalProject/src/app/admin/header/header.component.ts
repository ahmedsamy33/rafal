import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from './../../services/shared/session.service';
import { AuthentionService } from './../../services/shared/authention.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
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
    private fb: FormBuilder, public http: HttpClientModule, private modalService: BsModalService ,public spinner:NgxSpinnerService , public toast : ToastrService) {





    this.userName = localStorage.getItem('userName');
    let profileImaeToken = localStorage.getItem('imgToken');

      console.log(profileImaeToken);
      
   
    this.getProfileImageByToken(profileImaeToken)


  }


  getProfileImageByToken(imageToken) {
    
    this.spinner.show()
    this.AuthService.getProfileImage(imageToken).subscribe(image => {


      this.createImageFromBlob(image)
      
      this.spinner.hide()

    },

      err => {

     
        this.spinner.hide()
        this.toast.error(err.message , 'Server Error');


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


 





  previewImg(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile != null) {
      this.readURL(event)

    }
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

     localStorage.setItem('imgToken',data.imageToken);


      this.getProfileImageByToken(data.imageToken)


    }, err => {

      
      this.spinner.hide()

    this.toast.error(err.message , 'Server Error');

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
    this.toast.error('Upload A valid Image Please', 'Server Error');

      

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

openModal(template: TemplateRef<any>) {
    this.imageSrc = this.avatarImgSrc;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
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
