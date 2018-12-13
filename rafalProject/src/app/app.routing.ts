import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './admin/components/users/users.component';
import { AdvirtesmentComponent } from './admin/components/advirtesment/advirtesment.component';



const appRoutes: Routes = [

    //Site routes goes here 
    {
        path: 'layout', component: LayoutComponent,
        children: [
            {
                path: 'Users', component: UsersComponent,
            },
            {
                path: 'advetis', component: AdvirtesmentComponent
            }
        ]
    },

    //no layout routes
    // { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to login
    // { path: '**', redirectTo: 'login' },
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);


