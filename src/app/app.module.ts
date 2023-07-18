import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {NgIconsModule} from "@ng-icons/core";
import {heroHomeSolid, heroMagnifyingGlassSolid} from "@ng-icons/heroicons/solid";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        SharedModule,
        AppRoutingModule,
        NgIconsModule.withIcons({heroHomeSolid, heroMagnifyingGlassSolid}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
