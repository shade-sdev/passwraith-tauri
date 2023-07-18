import {Component, Input} from '@angular/core';
import {PasswordModel} from "../../../core/models/password-model";

@Component({
    selector: 'wraith-password-head',
    templateUrl: './password-head.component.html',
    styleUrls: ['./password-head.component.css']
})
export class PasswordHeadComponent {
    @Input() passwords?: Array<PasswordModel> = [
        {
            id: 1,
            username: 'Shade',
            website: 'Adobe',
            website_icon_url: 'https://cdn-icons-png.flaticon.com/128/888/888835.png'
        }
    ];
    @Input() totalElements?: number;
}
