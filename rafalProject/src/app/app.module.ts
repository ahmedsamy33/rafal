import { GlobalService } from './services/global.service';
import { SessionService } from './services/shared/session.service';
import { AuthentionService } from './services/shared/authention.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './component/home/home.component';
import { LoginmodalComponent } from './component/loginmodal/loginmodal.component';
import { ForgetmodalComponent } from './component/forgetmodal/forgetmodal.component';
import { ResetmodalComponent } from './component/resetmodal/resetmodal.component';
import { SignupmodalComponent } from './component/signupmodal/signupmodal.component';
import { VerfiymodalComponent } from './component/verfiymodal/verfiymodal.component';
import { UpgrademodalComponent } from './component/upgrademodal/upgrademodal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CharterComponent } from './component/services/charter/charter.component';
import { HiringComponent } from './component/services/hiring/hiring.component';
import { FeasibilityComponent } from './component/services/feasibility/feasibility.component';
import { EstablishComponent } from './component/services/establish/establish.component';
import { CustomsComponent } from './component/services/customs/customs.component';
import { EmploymentComponent } from './component/services/employment/employment.component';
import { OfficeComponent } from './component/services/office/office.component';
import { TradingComponent } from './component/services/trading/trading.component';
import { CertifiedComponent } from './component/services/certified/certified.component';
import { ShippingComponent } from './component/services/shipping/shipping.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SettingsService } from './services/shared/settings.service';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { ConfirmPasswordComponent } from './component/confirm-password/confirm-password.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LayoutComponent } from './admin/layout/layout.component';
import { HeaderComponent } from './admin/header/header.component';
import { MenuComponent } from './admin/menu/menu.component';
import { ChartAccountingComponent } from './admin/components/services/chart-accounting/chart-accounting.component';
import { FeasibilitystudyComponent } from './admin/components/services/feasibilitystudy/feasibilitystudy.component';
import { EstablishcompanyComponent } from './admin/components/services/establishcompany/establishcompany.component';
import { CustomerclearanceComponent } from './admin/components/services/customerclearance/customerclearance.component';
import { OfficeservicesComponent } from './admin/components/services/officeservices/officeservices.component';
import { TradingagenciesComponent } from './admin/components/services/tradingagencies/tradingagencies.component';
import { CertifiedtranslationComponent } from './admin/components/services/certifiedtranslation/certifiedtranslation.component';
import { EstablishedcompanyComponent } from './admin/components/company/establishedcompany/establishedcompany.component';
import { NewinvestorComponent } from './admin/components/company/newinvestor/newinvestor.component';
import { InternationalcompanyComponent } from './admin/components/company/internationalcompany/internationalcompany.component';
import { AdvirtesmentComponent } from './admin/components/advirtesment/advirtesment.component';
import { UsersComponent } from './admin/components/users/users.component';
import { routing } from './app.routing';
import { DataTableModule } from "angular-6-datatable";
import { SidebarComponent } from './admin/layout/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import Swal from 'sweetalert2';
import { HiringlaborsadminComponent } from './admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component';
import { EmploymentadminComponent } from './admin/components/services/employmentadmin/employmentadmin.component';
import { ShippingadminComponent } from './admin/components/services/shippingadmin/shippingadmin.component'


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    LoginmodalComponent,
    ForgetmodalComponent,
    ResetmodalComponent,
    SignupmodalComponent,
    VerfiymodalComponent,
    UpgrademodalComponent,
    CharterComponent,
    HiringComponent,
    FeasibilityComponent,
    EstablishComponent,
    CustomsComponent,
    EmploymentComponent,
    OfficeComponent,
    TradingComponent,
    CertifiedComponent,
    ShippingComponent,
    ConfirmPasswordComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    ChartAccountingComponent,
    FeasibilitystudyComponent,
    EstablishcompanyComponent,
    CustomerclearanceComponent,
    OfficeservicesComponent,
    TradingagenciesComponent,
    CertifiedtranslationComponent,
    EstablishedcompanyComponent,
    NewinvestorComponent,
    InternationalcompanyComponent,
    AdvirtesmentComponent,
    UsersComponent,
    HiringlaborsadminComponent,
    EmploymentadminComponent,
    ShippingadminComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),// ToastrModule added,
    NgxSpinnerModule,
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    routing,
    DataTableModule
  ],
  providers: [BsModalService, AuthentionService, SessionService, SettingsService, GlobalService],
  bootstrap: [AppComponent],
  entryComponents: [

    LoginmodalComponent,
    ForgetmodalComponent,
    SidebarComponent,
    ResetmodalComponent,
    SignupmodalComponent,
    VerfiymodalComponent,
    UpgrademodalComponent,
    CharterComponent,
    HiringComponent,
    FeasibilityComponent,
    EstablishComponent,
    CustomsComponent,
    EmploymentComponent,
    OfficeComponent,
    TradingComponent,
    CertifiedComponent,
    ShippingComponent,
    ConfirmPasswordComponent
  ],
  exports: [
    ModalModule, CommonModule, TranslateModule
  ]

})
export class AppModule { }
