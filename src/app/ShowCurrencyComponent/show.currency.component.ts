import { CurrencyComponent } from './../CurrencyComponent/currencyView.component';

import { OnInit, Component, Input, ViewChild } from "@angular/core";
import { Currency } from "../CurrencyComponent/Currency";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'show-curr-view',
    templateUrl: 'show.currency.component.html',
    styleUrls: ['show.currency.component.css']
  }) 

  export class ShowCurrencyComponent implements OnInit {
   currency : Currency;
    id: String;
    private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('currency')));
    this.currency = JSON.parse(localStorage.getItem('currency'));
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    
    
  }
  
  }