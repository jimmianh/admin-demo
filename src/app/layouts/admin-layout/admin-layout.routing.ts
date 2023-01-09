import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {CampaignManagementPageComponent} from "../../pages/campaign-management/campaign-management-page/campaign-management-page.component";
import {TransactionManagementPageComponent} from "../../pages/transaction-management/transaction-management-page/transaction-management-page.component";
import {UserManagementPageComponent} from "../../pages/user-management/user-management-page/user-management-page.component";
import {CategoriesManagementPageComponent} from "../../pages/categories-management/categories-management-page/categories-management-page.component";
import {SponsorManagementPageComponent} from "../../pages/sponsor-management/sponsor-management-page/sponsor-management-page.component";
import {ArticleManagementPageComponent} from "../../pages/article-management/article-management-page/article-management-page.component";
import {CommentManagementPageComponent} from "../../pages/comment-management/comment-management-page/comment-management-page.component";
import {FaqManagementPageComponent} from "../../pages/faq-management/faq-management-page/faq-management-page.component";
import {PaymentChannelManagementPageComponent} from "../../pages/payment-channel-management/payment-channel-management-page/payment-channel-management-page.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'campaign/list',      component: CampaignManagementPageComponent },
    { path: 'transaction',      component: TransactionManagementPageComponent },
    { path: 'user',      component: UserManagementPageComponent },
    { path: 'categories',      component: CategoriesManagementPageComponent },
    { path: 'sponsor',      component: SponsorManagementPageComponent },
    { path: 'article',      component: ArticleManagementPageComponent },
    { path: 'comment',      component: CommentManagementPageComponent },
    { path: 'faq',      component: FaqManagementPageComponent },
    { path: 'payment-channel',      component: PaymentChannelManagementPageComponent },
];
