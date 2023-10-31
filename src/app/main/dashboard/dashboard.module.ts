import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CallComponent } from './call/call.component';
import { UserComponent } from './user/user.component';
import { CampaignComponent } from './campaign/campaign.component';
import { RouterModule } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes = [

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "call",
    component: CallComponent
  },
  {
    path: "campaign",
    component: CampaignComponent
  },
];


@NgModule({
  declarations: [
    HomeComponent,
    CallComponent,
    UserComponent,
    CampaignComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), NgxDatatableModule, ContentHeaderModule, TranslateModule, CoreCommonModule,
  ]
})
export class DashboardModule { }
