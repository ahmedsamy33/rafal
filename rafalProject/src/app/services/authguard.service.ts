import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './shared/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public router: Router) { }
  canActivate(): boolean {
    // if (!SessionService.userSessionData.is_log) {
    // console.log(SessionService.userSessionData.userDetails.type, !SessionService.userSessionData.is_log && SessionService.userSessionData.userDetails.type != 'Company');

    if (!SessionService.userSessionData.is_log || SessionService.userSessionData.userDetails.type != 'Company') {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
