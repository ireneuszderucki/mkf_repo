import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger,  } from '@angular/material/menu';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AppConfigurationData } from 'src/app/model/app-configuration-data.component';
import { MenuDialogMobileComponent } from './menu-dialog/menu-dialog-mobile.component';
import { AbsoluteSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-profile-mobile',
  templateUrl: './mobile-profile.component.html',
  styleUrls: ['./mobile-profile.component.scss'],
})
export class MobileProfileComponent implements OnInit {
  @Input() configuration: AppConfigurationData;
  // @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  openMenu() {
    // this.menuTrigger.openMenu();
    console.log("Menu opened programatically");
    let dialogRef: MatDialogModule = this.dialog.open(MenuDialogMobileComponent, {
      height: '80%',
      width: '80%',
      // position: { right: '20%', top: '20%' },
      hasBackdrop: true,
    });
  }
}
