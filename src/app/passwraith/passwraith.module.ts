import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswraithRoutingModule } from './passwraith-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SharedModule} from "../shared/shared.module";
import {PasswordService} from "../core/services/password.service";
import {NgIconComponent} from "@ng-icons/core";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        PasswraithRoutingModule,
        SharedModule,
        NgIconComponent
    ],
    providers: [PasswordService]
})
export class PasswraithModule { }
