import { Component, Input, OnInit } from '@angular/core';
import { AppConfigurationData } from 'src/app/model/app-configuration-data.component';

@Component({
  selector: 'app-profile-mobile',
  templateUrl: './mobile-profile.component.html',
  styleUrls: ['./mobile-profile.component.scss'],
})
export class MobileProfileComponent implements OnInit {
  @Input() configuration: AppConfigurationData;



  ngOnInit(): void {

  }
}
