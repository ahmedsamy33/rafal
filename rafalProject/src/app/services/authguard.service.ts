import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  public x= SessionService.userSessionData.userDetails.type;
  constructor(public router: Router) { }
  canActivate(): boolean {
    // if (!SessionService.userSessionData.is_log) {
    // console.log(SessionService.userSessionData.userDetails.type, !SessionService.userSessionData.is_log && SessionService.userSessionData.userDetails.type != 'Company');
   
    // console.log( SessionService.userSessionData.userDetails.type.localeCompare("ADMIN") == 0)
    if (!SessionService.userSessionData.is_log ||  SessionService.userSessionData.userDetails.type != "SUPERADMIN") {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
