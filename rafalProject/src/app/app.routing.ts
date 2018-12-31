import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './admin/components/users/users.component';
import { AdvirtesmentComponent } from './admin/components/advirtesment/advirtesment.component';
import { CertifiedtranslationComponent } from './admin/components/services/certifiedtranslation/certifiedtranslation.component';
import { ChartAccountingComponent } from './admin/components/services/chart-accounting/chart-accounting.component';
import { CustomerclearanceComponent } from './admin/components/services/customerclearance/customerclearance.component';
import { EstablishcompanyComponent } from './admin/components/services/establishcompany/establishcompany.component';
import { FeasibilitystudyComponent } from './admin/components/services/feasibilitystudy/feasibilitystudy.component';
import { OfficeservicesComponent } from './admin/components/services/officeservices/officeservices.component';
import { TradingagenciesComponent } from './admin/components/services/tradingagencies/tradingagencies.component';
import { HiringlaborsadminComponent } from './admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component';
import { ShippingadminComponent } from './admin/components/services/shippingadmin/shippingadmin.component';
import { EmploymentadminComponent } from './admin/components/services/employmentadmin/employmentadmin.component';
import { EstablishedcompanyComponent } from './admin/components/company/establishedcompany/establishedcompany.component';
import { InternationalcompanyComponent } from './admin/components/company/internationalcompany/internationalcompany.component';
import { NewinvestorComponent } from './admin/components/company/newinvestor/newinvestor.component';
import { AuthguardService } from './services/authguard.service';



const appRoutes: Routes = [



  // Site routes goes here
  {
    path: 'layout', component: LayoutComponent, canActivate: [AuthguardService],
    children: [
      // service
      { path: 'charter_accounting', component: ChartAccountingComponent },
      { path: 'hiringLabors', component: HiringlaborsadminComponent },
      { path: 'feasability_Study', component: FeasibilitystudyComponent },
      { path: 'establish_companies', component: EstablishcompanyComponent },
      { path: 'custom_clearance', component: CustomerclearanceComponent },
      { path: 'employment', component: EmploymentadminComponent },
      { path: 'office_services', component: OfficeservicesComponent },
      { path: 'trading_Agencies', component: TradingagenciesComponent },
      { path: 'certified_Translations', component: CertifiedtranslationComponent },
      { path: 'shipping', component: ShippingadminComponent },

      // company
      { path: 'established_Company', component: EstablishedcompanyComponent },
      { path: 'new_Investor', component: NewinvestorComponent },
      { path: 'International', component: InternationalcompanyComponent },

      { path: 'Users', component: UsersComponent },
      { path: 'advetis', component: AdvirtesmentComponent },
    ]
  },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent },

  { path: '**', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });


