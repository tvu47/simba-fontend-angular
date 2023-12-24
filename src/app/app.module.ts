//module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//components
import { AppComponent } from './app.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DirectFactoryDirective } from './direct-factory.directive';
import { UserFromComponent } from './components/form/user-from/user-from.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutsideInterfaceComponent } from './outside-interface/outside-interface.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { FormBillComponent } from './form-bill/form-bill.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { DialogQuestComponent } from './dialog-quest/dialog-quest.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ManageBilliardRoomComponent } from './manage-billiard-room/manage-billiard-room.component';
import { CrudService } from './services/crud.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ForgotPosswdComponent } from './forgot-posswd/forgot-posswd.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { InputSimpleComponent } from './input-simple/input-simple.component';
import { FormPasswdChangeComponent } from './form-passwd-change/form-passwd-change.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthorizedComponent } from './authorized/authorized.component';
import { TokenService } from './services/token.service';
import { ResourceService } from './services/resource.service';
import { UserComponent } from './user/user.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponentComponent,
    InputFieldComponent,
    LoginComponent,
    RegisterComponent,
    DirectFactoryDirective,
    UserFromComponent,
    NavMenuComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    OutsideInterfaceComponent,
    AdminComponent,
    TableComponent,
    FormBillComponent,
    DialogQuestComponent,
    ManageBilliardRoomComponent,
    ForgotPosswdComponent,
    EnterCodeComponent,
    InputSimpleComponent,
    FormPasswdChangeComponent,
    LogoutComponent,
    AuthorizedComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    HttpClientModule,
    MatInputModule,
    OAuthModule.forRoot()
  ],
  providers: [
    CrudService,
    TokenService,
    AuthService,
    CommonService,
    ResourceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
