package com.humyng;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.view.View;
import android.content.Intent;
import android.net.Uri;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "humyng";
  }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        hideNavigationBar();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            hideNavigationBar();
        }
    }

    private void hideNavigationBar() {
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);

    }
    public void onNewIntent(Intent intent) {
        if (intent.getData() != null) {
          Uri deepLinkURL = intent.getData();
          // note deeplink_identifier means the identity that you register in the manifest.
          if (deepLinkURL.toString().contains("deeplink_identifier")) {
              // Create map for params
              WritableMap event = Arguments.createMap();
              // Put data to map
              event.putString("url", deepLinkURL.toString());
              // Get EventEmitter from context and send event thanks to it
              getReactInstanceManager().getCurrentReactContext()
                      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                      .emit("url", event);
          } else {
             // to handle other deeplink that not related to the defined deeplink identifier such as notification
             setIntent(intent);
          }
        } 
    }
  
}
