
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { AddComponent } from './add/add.component';
import { ColorComponent } from './color/color.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { InfosComponent } from './infos/infos.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';


const routes : Routes = [
    {path:'', component: HomeComponent},
    {path:'cv', component:CvComponent, children:[
        {path:'', component: CvComponent},
        {path:'add', component: AddComponent, canActivate:[LoginGuard]},
        {path:':id', component: InfosComponent},
    ]},
    {path:'color', component: ColorComponent},
    {path:'word', component: MiniwordComponent},
    {path:'login', component: LoginComponent, canActivate:[LogoutGuard]}

];

export const ROUTING = RouterModule.forRoot(routes);