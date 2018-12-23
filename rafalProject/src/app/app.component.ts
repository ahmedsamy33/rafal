import { SessionService } from './services/shared/session.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AuthentionService } from './services/shared/authention.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public activeUrl: any;
  constructor(translate: TranslateService,
    private autherService: AuthentionService,
    public router: Router
  ) {





    if (localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", "en");
      translate.setDefaultLang('en');
      translate.use('en');
    } else {
      let lang = localStorage.getItem("lang");
      translate.setDefaultLang(lang);
      translate.use(lang);
    }


    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == "en") {
        localStorage.setItem("lang", "en");
      } else {
        localStorage.setItem("lang", "ar");
      }
    });


    let token = localStorage.getItem('token');
    // console.log(true);
    let type = localStorage.getItem('type');
    let image = localStorage.getItem('imgToken');


    if (token != null) {
      SessionService.userSessionData.userDetails.picture_url = image;
      SessionService.userSessionData.tkn = token;
      if (type == 'ADMIN' || type == 'SUPERADMIN') {
        SessionService.userSessionData.is_log = true;
        this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.activeUrl = event.url;
            this.router.navigate([this.activeUrl]);
          }
        });

        if (type == 'ADMIN') {
          SessionService.userSessionData.userDetails.type = 'ADMIN';
        } else if (type == 'SUPERADMIN') {
          SessionService.userSessionData.userDetails.type = 'SUPERADMIN';
        }

        this.autherService.validateSession().subscribe(
          data => {
            SessionService.saveInSession(data);

            SessionService.saveDataInLocalStorage(data);
            // console.log(data, SessionService.userSessionData);
            localStorage.setItem("token", data.tkn);
          },
          error => {

          }
        )
      }

    }
    // console.log(token, SessionService.userSessionData);

  }


}


