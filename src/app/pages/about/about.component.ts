import { Component, OnInit } from '@angular/core';
import { GlobalConfigService } from '../../services/global-config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public service: GlobalConfigService) {}

  ngOnInit(): void {}
}
