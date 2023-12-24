import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OutsideInterfaceComponent } from './outside-interface/outside-interface.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormBillComponent } from './form-bill/form-bill.component';
import { ManageBilliardRoomComponent } from './manage-billiard-room/manage-billiard-room.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPosswdComponent } from './forgot-posswd/forgot-posswd.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { FormPasswdChangeComponent } from './form-passwd-change/form-passwd-change.component';
import { InputSimpleComponent } from './input-simple/input-simple.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'', redirectTo: 'outside', pathMatch:'full'},
  {path:'outside', component: OutsideInterfaceComponent},
  {path:'authorized', component: AuthorizedComponent},
  {path:'change-password', component: FormPasswdChangeComponent},
  {path:'test', component: FormBillComponent},
  {path:'login-test', component: InputSimpleComponent},
  {path:'enter-code', component: EnterCodeComponent},
  {path:'logout', component: LogoutComponent},
  {path:'forgot-password', component: ForgotPosswdComponent},
  {path:'admin', component: AdminComponent, children:[
    {path:'dashboard', component: DashboardComponent},
    {path:'home', component: HomeComponent},
    {path:'administer', component: ManageBilliardRoomComponent},
  ]},
  {path:'user', component: UserComponent},
  {path:'header', component: HeaderComponent},
  {path:'sign-in', component: LoginComponent},
  {path:'sign-up', component: RegisterComponent},
  {path:'nav', component: SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
