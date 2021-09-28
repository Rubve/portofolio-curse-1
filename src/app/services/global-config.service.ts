import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConfig } from '../interfaces/global-config.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalConfigService {
  config: GlobalConfig = {};
  loaded = false;

  team: any[] = [];

  constructor(private http: HttpClient) {
    this.loadConfig();
    this.loadTeam();
  }

  private loadConfig() {
    this.http
      .get('assets/data/global.config.json')
      .subscribe((res: GlobalConfig) => {
        this.loaded = true;
        this.config = res;
      });
  }

  private loadTeam() {
    this.http
      .get('https://angular-curso-1-default-rtdb.firebaseio.com/team.json')
      .subscribe((res: any) => {
        this.team = res;
      });
  }
}
