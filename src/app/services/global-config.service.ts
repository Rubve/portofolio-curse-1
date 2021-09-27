import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConfig } from '../interfaces/global-config.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalConfigService {
  config: GlobalConfig = {};
  loaded = false;

  constructor(private http: HttpClient) {
    this.http
      .get('assets/data/global.config.json')
      .subscribe((res: GlobalConfig) => {
        this.loaded = true;
        this.config = res;
      });
  }
}
