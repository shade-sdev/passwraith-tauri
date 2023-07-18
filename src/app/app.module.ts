import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {NgIconsModule} from "@ng-icons/core";
import {
    heroClipboardSolid,
    heroEyeSolid,
    heroHomeSolid,
    heroMagnifyingGlassSolid,
    heroStarSolid
} from "@ng-icons/heroicons/solid";
import {heroPencil, heroStar, heroTrash} from "@ng-icons/heroicons/outline";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        SharedModule,
        AppRoutingModule,
        NgIconsModule.withIcons({heroHomeSolid, heroMagnifyingGlassSolid, heroPencil, heroTrash, heroStar, heroStarSolid, heroClipboardSolid, heroEyeSolid}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
