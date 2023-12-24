import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  logoutUrl = environment.logout_url;
  isLogged:boolean;
  isAdmin:boolean;
  
  constructor(private router: Router, private tokenService: TokenService) {}
  ngOnInit(): void {
    this.getLogged();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  onLogout(){
    this.tokenService.clear();
    location.href = this.logoutUrl;
  }
  getLogged(){
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }
}
