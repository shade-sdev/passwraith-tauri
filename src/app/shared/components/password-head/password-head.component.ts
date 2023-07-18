import {Component, Input} from '@angular/core';
import {PasswordModel} from "../../../core/models/password-model";

@Component({
    selector: 'wraith-password-head',
    templateUrl: './password-head.component.html',
    styleUrls: ['./password-head.component.css']
})
export class PasswordHeadComponent {
    @Input() passwords?: Array<PasswordModel> = [];
    @Input() totalElements?: number;
}
