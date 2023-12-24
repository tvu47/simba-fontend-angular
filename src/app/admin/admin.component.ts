import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  sideBarOpen = true;
  message = '';

  @ViewChild('menu') menu: HeaderComponent;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
    
  constructor( private router: Router){}
  ngOnInit(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(()=>{
      this.menu.getLogged();
    })
  }
}
