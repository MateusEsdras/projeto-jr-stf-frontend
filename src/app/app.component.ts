import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages : any[] = [
    {titulo: 'Meu Perfil', url: '/profile', icon: 'person'},
    {titulo: 'Logout', url: '', icon: 'log-out'}
  ]

  constructor(
    private splashScreen: SplashScreen,
    private loginService: LoginService,
    private statusBar: StatusBar,
    private platform: Platform,
    private nav: NavController) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString("7044ff");
      this.splashScreen.hide();
    });
  }

  openPage(page: {titulo: string}){
    switch(page.titulo){
      case 'Logout': this.loginService.logout();
      this.nav.navigateRoot('login');
      break;
    }
  }
}
