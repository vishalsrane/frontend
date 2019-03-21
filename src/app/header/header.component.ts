import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean = false;

  toogleSideMenu(){
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed == true){
      let sideMenuCol = document.getElementById('side-menu-toogle-button-col');
      sideMenuCol.className = 'col-sm-1 side-menu-toogle-button-col-small';
      let sideNavigationCol = document.getElementById('side-navigation-col');
      sideNavigationCol.className = 'side-navigation-none';
      let mainContentCol = document.getElementById('main-content-col');
      mainContentCol.className = "col-md-12";
    }else{
      let sideMenuCol = document.getElementById('side-menu-toogle-button-col');
      sideMenuCol.className = 'col-sm-2 side-menu-toogle-button-col';
      let sideNavigationCol = document.getElementById('side-navigation-col');
      sideNavigationCol.className = 'col-md-2 side-navigation-col';
      let mainContentCol = document.getElementById('main-content-col');
      mainContentCol.className = "col-md-10";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
