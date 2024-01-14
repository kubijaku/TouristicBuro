import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { ServerInfoService } from './server-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'biuro2';
  constructor(public authService: AuthService, private serverInfoService: ServerInfoService) {}
  server : string = this.serverInfoService.getServer();

  async setFirebase() {
    // console.log(this.serverInfoService.getServer());
    await this.serverInfoService.setServer('firebase');
    this.server = 'firebase';
  }

  async setLocal() {
    // console.log(this.serverInfoService.getServer());
    await this.serverInfoService.setServer('local');
    this.server = 'local';
  }
}
