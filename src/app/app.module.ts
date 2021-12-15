import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from './core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopProfileComponent } from './profile/desktop/desktop-profile.component';
import { MobileProfileComponent } from './profile/mobile/mobile-profile.component';
import { WelcomePageComponent } from './common/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuDialogMobileComponent } from './profile/mobile/menu-dialog/menu-dialog-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopProfileComponent,
    MobileProfileComponent,
    WelcomePageComponent,
    MenuDialogMobileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
