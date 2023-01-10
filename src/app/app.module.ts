import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LoginLayoutComponent} from "./layouts/login-layout/login-layout.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {JwtModule} from "@auth0/angular-jwt";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzCardModule} from "ng-zorro-antd/card";

registerLocaleData(en);

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    HttpClientModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzButtonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://herofund.up.railway.app", "foo.com", "bar.com"]
      },
    }),
    NgbModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCardModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
