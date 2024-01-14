import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerInfoService {
  private storageKey = 'server_info';
  private server: string = '';

  constructor() {
    // Load data from sessionStorage when the service is instantiated
    const storedServer = sessionStorage.getItem(this.storageKey);
    if (storedServer) {
      this.server = storedServer;
    }
  }

  setServer(server: string): void {
    this.server = server;
    // Save data to sessionStorage when it is updated
    sessionStorage.setItem(this.storageKey, this.server);
  }

  getServer(): string {
    return this.server;
  }
}