import { Component, OnInit } from '@angular/core';
import { GlobalConfigService } from '../../services/global-config.service';
import { GlobalConfig } from '../../interfaces/global-config.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public service: GlobalConfigService) {}

  ngOnInit(): void {}
}
