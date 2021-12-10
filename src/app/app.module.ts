import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from './core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopProfileComponent } from './profile/desktop/desktop-profile.component';
import { MobileProfileComponent } from './profile/mobile/mobile-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopProfileComponent,
    MobileProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
