import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordService} from "./services/password.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [PasswordService]
})
export class CoreModule {
}
