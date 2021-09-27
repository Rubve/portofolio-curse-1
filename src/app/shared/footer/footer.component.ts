import { Component, OnInit } from '@angular/core';
import { GlobalConfigService } from '../../services/global-config.service';
import { GlobalConfig } from '../../interfaces/global-config.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor(public service: GlobalConfigService) {}

  ngOnInit(): void {}
}
