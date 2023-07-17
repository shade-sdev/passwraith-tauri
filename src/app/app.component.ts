import {Component, OnInit} from "@angular/core";
import {invoke} from "@tauri-apps/api/tauri";
import {PasswordModel} from "../bindings/PasswordModel";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    greetingMessage = "";

    greet(event: SubmitEvent, name: string): void {
        event.preventDefault();

        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        invoke<string>("greet", {name}).then(async (text) => {
            this.greetingMessage = text;
            const newPass = {
                id: 1,
                username: "Yukki",
                password: "Yukki",
                website: "Yukki",
                website_url: "http://yukki.ga",
                website_icon_url: "http://yukki.ga/favicon.co",
                password_type: "Login"
            } as PasswordModel

            const passUpdate = {
                id: 26,
                username: "Yukki26",
                password: "Yukki26",
                website: "Yukki26",
                website_url: "http://yukki.ga26",
                website_icon_url: "http://yukki.ga/favicon.co26",
                password_type: "Card"
            } as PasswordModel

            await invoke('save', {model: newPass})
            await invoke('update', {id: 26, model: passUpdate})
            await invoke('delete', {id: 27, model: passUpdate})
        });
    }

    async ngOnInit(): Promise<void> {
        let response: PasswordModel = await invoke<PasswordModel>('find_one', {id: 24});
        console.log(response);

        let responses: Array<PasswordModel> = await invoke<Array<PasswordModel>>('find_all', {});
        console.log(responses);

    }
}
