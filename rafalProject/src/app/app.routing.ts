import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './admin/components/users/users.component';



const appRoutes: Routes = [

    //Site routes goes here 
    { path: 'Users', component: UsersComponent },
    {
        path: 'layout', component: LayoutComponent,
        

        children: [
        //   { path: '', component: HomeComponent, pathMatch: 'full'},
        //   { path: 'Users', component: UsersComponent },
        //   { path: 'test/:id', component: AboutComponent }
        ]
    },

    
    // App routes goes here here
    // { 
    //     path: '',
    //     children: [
    //       { path: 'dashboard', component: DashboardComponent },
    //       { path: 'profile', component: ProfileComponent }
    //     ]
    // },

    //no layout routes
    // { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to login
    // { path: '**', redirectTo: 'login' },
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);


