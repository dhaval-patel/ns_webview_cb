package com.tns;

import android.webkit.JavascriptInterface;

public class SampleJavascriptInterface {
    public SampleJavascriptInterface() {}
    
    @JavascriptInterface
    public void postMessage(String message) {
        this._postMessage(message);
    }

    public void _postMessage(String message) {
        // we will override this in NS
    }
}