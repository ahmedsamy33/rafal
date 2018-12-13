import { SessionService } from './services/shared/session.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(translate: TranslateService) {

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

    if (token != null) {
      SessionService.userSessionData.tkn = token;
      // this.AuthService.validateSession().subscribe(
      //   data => {
      //     SessionService.saveInSession(data);

      //     SessionService.saveDataInLocalStorage(data);
      //     console.log(data, SessionService.userSessionData);
      //     localStorage.setItem("token", data.tkn);
      //   },
      //   error => {

      //   }
      // )
    }
    console.log(token, SessionService.userSessionData);

  }


}


