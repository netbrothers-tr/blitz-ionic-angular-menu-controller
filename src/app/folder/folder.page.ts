import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  clickTestGetMenus() {
    this.menuCtrl.getMenus().then(result => console.debug('getMenus', result));
  }

  clickTestOpen() {
    this.menuCtrl.open().then(result => console.debug('open', result))
  }

  clickTestOpenWithId() {
    this.menuCtrl.open('first-menu').then(result => console.debug('open with ID', result));
  }

  clickTestClose() {
    this.menuCtrl.close().then(result => console.debug('close', result));
  }

  clickTestCloseWithId() {
    this.menuCtrl.close('first-menu').then(result => console.debug('close with ID', result));
  }
}
