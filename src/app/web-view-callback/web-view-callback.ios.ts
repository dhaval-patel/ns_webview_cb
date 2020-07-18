import { WebView } from "tns-core-modules/ui/web-view";

class CallbackInterface extends NSObject implements WKScriptMessageHandler {
    callback: (message: string) => void;
    static ObjCProtocols = [WKScriptMessageHandler]; // define our native protocalls

    static new(): CallbackInterface {
        return <CallbackInterface>super.new(); // calls new() on the NSObject
    }

    static initWithCallback(callback: (message: string) => void) {
        const wkScriptMessageHandlerImpl = CallbackInterface.new();
        wkScriptMessageHandlerImpl.callback = callback;
        return wkScriptMessageHandlerImpl;
    }

    userContentControllerDidReceiveScriptMessage(
        userContentController: WKUserContentController,
        message: WKScriptMessage
    ): void {
        this.callback(message.body);
    }
}

export function initWebViewWithCallback(
    webView: WebView,
    callback: (message: string) => void
) {
    webView.ios.configuration.userContentController.addScriptMessageHandlerName(
        CallbackInterface.initWithCallback(callback),
        "IOS"
    );
}
