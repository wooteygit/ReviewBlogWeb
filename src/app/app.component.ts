import { Component,OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { MenuService } from './services/menu.service';

import { environment, Config } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
