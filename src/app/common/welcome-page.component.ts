import { Component, Input, OnInit } from '@angular/core';
import { AppConfigurationData } from 'src/app/model/app-configuration-data.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  @Input() configuration: AppConfigurationData;

  fullPathToWelcomeImage:string;

  ngOnInit(): void {
    console.log('conf: ');
    console.log(this.configuration);
    this.fullPathToWelcomeImage = "/assets/homepage/test" + this.configuration.welcomeImageId + ".jpg";
  }
}
