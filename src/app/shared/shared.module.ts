import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SideBarService} from "./services/side-bar.service";
import {RouterModule} from "@angular/router";
import {NgIconComponent} from "@ng-icons/core";
import { PasswordHeadComponent } from './components/password-head/password-head.component';

const reusables = [SidebarComponent]

@NgModule({
    declarations: [
        SidebarComponent,
        PasswordHeadComponent
    ],
    imports: [
        CommonModule, RouterModule, NgIconComponent
    ],
    exports: [reusables, PasswordHeadComponent],
    providers: [SideBarService]
})
export class SharedModule {
}
