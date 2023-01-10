import { Component, OnInit } from '@angular/core';
import {navItems} from "../routers";



@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public navItems = navItems;

    ngOnInit() {

    }

  onClick(url: any) {
    let navUrls = document.getElementsByClassName('nav-url');
    // @ts-ignore
    for (let navUrl of navUrls) {
      let path = navUrl.getAttribute("ng-reflect-router-link");
      if (path === url) {
        navUrl.classList.add("ant-menu-item-selected")
      } else {
        navUrl.classList.remove("ant-menu-item-selected")
      }
    }
  }

  onSelected(url: any, index: any) {
    let childrenNavs = document.getElementsByClassName('nav-url');
    let parentNavs = document.getElementsByClassName('parent-nav');
    // @ts-ignore
    for (let childrenNav of childrenNavs) {
      let path = childrenNav.getAttribute("ng-reflect-router-link");

      if (path === url) {
        childrenNav.classList.add("ant-menu-item-selected");
      } else {
        childrenNav.classList.remove("ant-menu-item-selected");
      }
    }
    // @ts-ignore
    for (let parentNav of parentNavs) {
      let id = parentNav.id;
      let antMenuSub = parentNav.querySelector('.ant-menu-sub')
      if (index == id) {
        parentNav.classList.add("ant-menu-submenu-open");
        parentNav.classList.add("ant-menu-submenu-selected");
        parentNav.classList.add("ant-menu-submenu-active");
      } else {
        parentNav.classList.remove("ant-menu-submenu-open");
        parentNav.classList.remove("ant-menu-submenu-active")
        parentNav.classList.remove("ant-menu-submenu-selected")
        antMenuSub.style.height = "0px";
        antMenuSub.style.overflow = "hidden";
      }
    }
  }
}
