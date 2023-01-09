import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/campaign',     title: 'Quản lý chiến dịch',         icon:'nc-bank',       class: '' },
    { path: '/transaction',     title: 'Lịch sử giao dịch',         icon:'nc-bank',       class: '' },
    { path: '/user',        title: 'Quản lý người dùng',         icon:'nc-bank',       class: '' },
    { path: '/categories',     title: 'Quản lý danh mục',         icon:'nc-bank',       class: '' },
    { path: '/sponsor',     title: 'Quản lý nhà đồng hành',         icon:'nc-bank',       class: '' },
    { path: '/article',     title: 'Quản lý bài viết',         icon:'nc-bank',       class: '' },
    { path: '/comment',     title: 'Quản lý bình luận',         icon:'nc-bank',       class: '' },
    { path: '/faq',     title: 'Quản lý FAQ',         icon:'nc-bank',       class: '' },
    { path: '/payment-channel',     title: 'Quản lý kênh thanh toán',         icon:'nc-bank',       class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
