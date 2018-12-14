import { AuthentionService } from './../../../services/shared/authention.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from '../../../services/shared/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  changePass: FormGroup;
  required = 'this feild requried'
  constructor(public bsModalRef: BsModalRef , builder: FormBuilder, public spinner:NgxSpinnerService , public AuthService:AuthentionService , public toastr:ToastrService) {

    
    this.changePass = builder.group({

      'oldpass': ['', [Validators.required]],
      'newpass': ['', [Validators.required]],
      'confirmpass': ['', [Validators.required]],
    },
      {
        validator: this.validate.bind(this)
      });
    

  }

  ngOnInit() {
  }

  validate(changePassFormGroup: FormGroup) {
    let password = changePassFormGroup.controls.newpass.value;
    let repeatPassword = changePassFormGroup.controls.confirmpass.value;

    if (repeatPassword.length <= 0) {
      return null;
    }

    if (repeatPassword !== password) {
      return {
        doesMatchPassword: true
      };
    }

    return null;

  }

  changPassword() {
    this.spinner.show()

    this.AuthService.changePassword(this.changePass.get('oldpass').value, this.changePass.get('newpass').value).subscribe(data => {

      this.spinner.hide()



      let value: any = localStorage.getItem("token");
      value = data.tkn;

      localStorage.setItem("token", JSON.stringify(value));


      SessionService.userSessionData.tkn = data.tkn;
    


      this.toastr.success('Done Updating Your Password','Change Password');
      this.bsModalRef.hide();
      this.changePass.reset()
     


    }, err => {
  
      this.spinner.hide()
      this.toastr.error(err.message,'Server Error');

    }

    )




  }

  hasError(field: string, error: string) {
    const ctrl = this.changePass.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
