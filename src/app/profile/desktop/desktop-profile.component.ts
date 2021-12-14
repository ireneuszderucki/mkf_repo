import { Component, Input, OnInit } from '@angular/core';
import { AppConfigurationData } from 'src/app/model/app-configuration-data.component';

@Component({
  selector: 'app-profile-desktop',
  templateUrl: './desktop-profile.component.html',
  styleUrls: ['./desktop-profile.component.scss'],
})
export class DesktopProfileComponent implements OnInit {
  @Input() configuration: AppConfigurationData;

  ngOnInit(): void {}
}
