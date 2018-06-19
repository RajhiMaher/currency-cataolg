import { DataViewModule } from 'primeng/dataview';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DropdownModule, PanelModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './CurrencyComponent/currencyView.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ShowCurrencyComponent } from './ShowCurrencyComponent/show.currency.component';
import { HashLocationStrategy, APP_BASE_HREF, LocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
import { NotFoundComponent } from './NotFoundComponent/notfound.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: CurrencyComponent },
  { path: 'currency/:id', component: ShowCurrencyComponent },
  { path: '**', component: NotFoundComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(appRoutes);
@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    ShowCurrencyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    BrowserAnimationsModule,
    ROUTING,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true} 
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule { }
