import { Component, NgZone } from "@angular/core";
import { initWebViewWithCallback } from "./web-view-callback/web-view-callback";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    message: string = "";

    constructor(private ngZone: NgZone) {}

    onWebViewLoaded(args) {
        initWebViewWithCallback(args.object, this.postMessage.bind(this));
    }

    postMessage(message: string) {
        this.ngZone.run(() => {
            this.message = message;
        });
    }
}
