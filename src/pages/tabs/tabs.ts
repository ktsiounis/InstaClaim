import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'

import { ProfilePage } from '../profile/profile';
import { ClaimsPage } from '../claims/claims';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  profilePage = ProfilePage;
  claimsPage = ClaimsPage;

  constructor(private actionSheetCtrl: ActionSheetController){}

  presentActionSheet(){
    this.actionSheetCtrl.create({
      title: 'Add new contract',
     buttons: [
       {
         text: 'Add new',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
    })
    .present();
  }
}
