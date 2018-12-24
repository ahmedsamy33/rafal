import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthentionService } from '../../services/shared/authention.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignupmodalComponent } from '../signupmodal/signupmodal.component';

@Component({
  selector: 'app-resetmodal',
  templateUrl: './resetmodal.component.html',
  styleUrls: ['./resetmodal.component.css']
})
export class ResetmodalComponent implements OnInit {
  public Oldpass: string;
  public Newpass: string;
  public Confirmnewpass: string;
  editFormPass: FormGroup;
  public language;

  constructor(public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private builder: FormBuilder,
    private autherService: AuthentionService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    // console.log("ddddd");
    let lang1 = localStorage.getItem("lang");
    this.language = lang1;
    this.editFormPass = this.builder.group({
      oldpass: ["", Validators.required],
      newpass: ["", Validators.required],
      confirmnewpass: ["", Validators.required]
    });
  }
  ngOnInit() {
  }
  opensignupmodal() {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(SignupmodalComponent, { class: 'modal-sm' });
  }


  changePass() {
    this.spinner.show();
    let option = {
      timeOut: 5000,
      progressBar: true
    }
    this.autherService.changePassword(this.Oldpass, this.Newpass).subscribe(
      data => {
        this.toastr.success('Password Changeed', 'successfully', option);

        localStorage.setItem("token", data.tkn);
        this.spinner.hide();
        this.bsModalRef.hide();
      },
      error => {
        this.toastr.error(error.errorCode, error.message, option);

        this.spinner.hide();

      }
    );
  }

  hasError(field: string, error: string) {
    const ctrl = this.editFormPass.get(field);

    return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
  }

}
