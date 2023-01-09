import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ArticleManagementPageComponent} from "../../pages/article-management/article-management-page/article-management-page.component";
import {ArticleManagementFormComponent} from "../../pages/article-management/article-management-form/article-management-form.component";
import {CampaignManagementPageComponent} from "../../pages/campaign-management/campaign-management-page/campaign-management-page.component";
import {CampaignManagementFormComponent} from "../../pages/campaign-management/campaign-management-form/campaign-management-form.component";
import {CategoriesManagementPageComponent} from "../../pages/categories-management/categories-management-page/categories-management-page.component";
import {CommentManagementDetailComponent} from "../../pages/comment-management/comment-management-detail/comment-management-detail.component";
import {FaqManagementPageComponent} from "../../pages/faq-management/faq-management-page/faq-management-page.component";
import {FaqManagementFormComponent} from "../../pages/faq-management/faq-management-form/faq-management-form.component";
import {PaymentChannelManagementPageComponent} from "../../pages/payment-channel-management/payment-channel-management-page/payment-channel-management-page.component";
import {SponsorManagementPageComponent} from "../../pages/sponsor-management/sponsor-management-page/sponsor-management-page.component";
import {SponsorManagementFormComponent} from "../../pages/sponsor-management/sponsor-management-form/sponsor-management-form.component";
import {TransactionManagementPageComponent} from "../../pages/transaction-management/transaction-management-page/transaction-management-page.component";
import {UserManagementPageComponent} from "../../pages/user-management/user-management-page/user-management-page.component";
import {UserManagementFormComponent} from "../../pages/user-management/user-management-form/user-management-form.component";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzImageModule} from "ng-zorro-antd/image";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {NzDividerModule} from "ng-zorro-antd/divider";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzSelectModule,
    NzTableModule,
    NzSwitchModule,
    NzIconModule,
    NzPaginationModule,
    NzCardModule,
    NzDatePickerModule,
    NzUploadModule,
    NzModalModule,
    NzImageModule,
    CKEditorModule,
    NzDividerModule,
  ],
  declarations: [
    DashboardComponent,
    ArticleManagementPageComponent,
    ArticleManagementFormComponent,
    CampaignManagementPageComponent,
    CampaignManagementFormComponent,
    CategoriesManagementPageComponent,
    CampaignManagementPageComponent,
    CommentManagementDetailComponent,
    FaqManagementPageComponent,
    FaqManagementFormComponent,
    PaymentChannelManagementPageComponent,
    SponsorManagementPageComponent,
    SponsorManagementFormComponent,
    TransactionManagementPageComponent,
    UserManagementPageComponent,
    UserManagementFormComponent
  ]
})

export class AdminLayoutModule {}
