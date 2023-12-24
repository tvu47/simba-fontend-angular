import { Component, ViewChild } from '@angular/core';
import { DirectFactoryDirective } from 'src/app/direct-factory.directive';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.scss']
})
export class UserFromComponent {
  _component: any;
  @ViewChild(DirectFactoryDirective, { static: true }) tabHost!: DirectFactoryDirective;
  constructor() {}
  ngOnInit(): void {
    this.loadComponent('ALL');
  }
  public tabSelect: any;

  loadComponent(_selectedTab: string) {
    this.tabSelect = _selectedTab;
    // remove loaded Component
    const viewContainerRef = this.tabHost.viewContainerRef;
    this._component = '';
    if (_selectedTab == 'LOGIN') this._component = LoginComponent;
    else if (_selectedTab == 'REGIS')
      this._component = RegisterComponent;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<DirectFactoryDirective>(
      this._component
    );
  }
}
