import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ColorComponent } from "./color/color.component";
import { FormsModule } from "@angular/forms";
import { ChildComponent } from "./child/child.component";
import { CvComponent } from "./cv/cv.component";
import { ListeComponent } from "./liste/liste.component";
import { ItemComponent } from "./item/item.component";
import { DetailComponent } from "./detail/detail.component";
import { VisiteComponent } from "./visite/visite.component";
import { DirectiveComponent } from "./directive/directive.component";
import { CustomDirDirective } from "./custom-dir.directive";
import { NoImagePipe } from "./no-image.pipe";
import { RecruterComponent } from "./recruter/recruter.component";
import { MiniwordComponent } from "./miniword/miniword.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { AddComponent } from "./add/add.component";
import { ROUTING } from "./app.routing";
import { HttpComponent } from "./http/http.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { loginInterceptorProvider } from "./login.interceptor";
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    VisiteComponent,
    DirectiveComponent,
    CustomDirDirective,
    NoImagePipe,
    RecruterComponent,
    MiniwordComponent,
    NavbarComponent,
    HomeComponent,
    InfosComponent,
    AddComponent,
    HttpComponent,
    LoginComponent
  ],
  imports: [BrowserModule, FormsModule, ROUTING, HttpClientModule],
  providers: [loginInterceptorProvider, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
