import { Component } from '@angular/core';
import { AppConfigurationData } from './model/app-configuration-data.component';
import { ApplicationStateService } from './service/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Monika Kuras Fotografia';

  isMobileResolution: boolean;
  configuration: AppConfigurationData = {
    welcomeImageId: "1"
  };

  constructor(private applicationStateService: ApplicationStateService) {
      this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
      console.log("IS MOBILE: ");
      console.log(this.isMobileResolution);
  }
}
