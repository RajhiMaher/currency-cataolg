
import { Component, ViewChild } from '@angular/core';
import { CurrencyComponent } from './CurrencyComponent/currencyView.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Available Currencies';
}
