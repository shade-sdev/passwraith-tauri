import {Component, OnInit} from '@angular/core';
import {PasswordService} from "../../../core/services/password.service";
import {PasswordModel} from "../../../core/models/password-model";

@Component({
    selector: 'wraith-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public passwords: Array<PasswordModel> = [];

    constructor(private readonly passwordService: PasswordService) {}

    ngOnInit(): void {
        this.passwordService.findAll().subscribe({
            next: (passwords: Array<PasswordModel>) => {
                this.passwords = passwords;
            },
            error: (msg) => {
                console.error(msg);
            }
        });
    }

}
