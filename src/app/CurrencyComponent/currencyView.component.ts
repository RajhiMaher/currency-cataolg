import { Currency } from './Currency';
import { OnInit, Component, Output, EventEmitter, ViewChild, ViewEncapsulation, Input } from "@angular/core";
import { SelectItem } from 'primeng/components/common/selectitem';
import { DropdownModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { ShowCurrencyComponent } from '../ShowCurrencyComponent/show.currency.component';

@Component({
    selector: 'curr-view',
    templateUrl: 'currencyView.component.html',
    styleUrls: ['currencyView.component.css'],
})
export class CurrencyComponent implements OnInit {

    title = 'Available Currencies';
    
    currencies: Currency[];

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    constructor(private router: Router) { }

    ngOnInit() {
        // this.carService.getCarsLarge().then(cars => this.cars = cars);
        this.sortOptions = [
            { label: 'ID', value: 'id' },
            { label: 'Code', value: 'code' },
            { label: 'Nom', value: 'name' },
            { label: 'Type', value: 'currency_type' }
        ];
        this.currencies = [
            {
                "id": "USD",
                "attributes": {
                    "code": "USD",
                    "name": "US Dollar",
                    "currency_type": "national",
                    "code_iso_numeric3": "840",
                    "code_iso_alpha3": "USD",
                    "symbol": "$",
                    "native_symbol": "$",
                    "category": "others"
                },
            },
            {
                "id": "EUR",
                "attributes": {
                    "code": "EUR",
                    "name": "Euro",
                    "currency_type": "national",
                    "code_iso_numeric3": "978",
                    "code_iso_alpha3": "EUR",
                    "symbol": "€",
                    "native_symbol": "€",
                    "category": "others"
                }
            },
            {
                "id": "JPY",
                "attributes": {
                    "code": "JPY",
                    "name": "Yen",
                    "currency_type": "national",
                    "code_iso_numeric3": "392",
                    "code_iso_alpha3": "JPY",
                    "symbol": "¥",
                    "native_symbol": "¥",
                    "category": "others"
                }
            },
            {
                "id": "ARS",
                "attributes": {
                    "code": "ARS",
                    "name": "Argentine Peso",
                    "currency_type": "national",
                    "code_iso_numeric3": "032",
                    "code_iso_alpha3": "ARS",
                    "symbol": "AR$",
                    "native_symbol": "$",
                    "category": "others"
                }
            },
            {
                "id": "CUC",
                "attributes": {
                    "code": "CUC",
                    "name": "Peso Convertible",
                    "currency_type": "national",
                    "code_iso_numeric3": "931",
                    "code_iso_alpha3": "CUC",
                    "symbol": null,
                    "native_symbol": null,
                    "category": "others"

                }
            },
            {
                "id": "CHF",
                "attributes": {
                    "code": "CHF",
                    "name": "Swiss Franc",
                    "currency_type": "national",
                    "code_iso_numeric3": "756",
                    "code_iso_alpha3": "CHF",
                    "symbol": "CHF",
                    "native_symbol": "CHF",
                    "category": "others"
                }
            }
        ];
    }

    onSortChange(event) {
        let value = event.value;

        this.currencies.sort((a, b) => {
            let result = null;
            if (value === "name") {
                if (a.attributes.name < b.attributes.name) result = -1;
                else if (a.attributes.name > b.attributes.name) result =  1;
                else result = 0;
            } else if (value === "currency_type") {
                if (a.attributes.currency_type < b.attributes.currency_type) result = -1;
                else if (a.attributes.currency_type > b.attributes.currency_type) result = 1;
                else result = 0;
            } else if (value === "code") {
                if (a.attributes.code < b.attributes.code) result = -1;
                else if (a.attributes.code > b.attributes.code) result = 1;
                else result = 0;
            } else if (value === "symbol") {
                if (a.attributes.symbol < b.attributes.symbol) result = -1;
                else if (a.attributes.symbol > b.attributes.symbol) result = 1;
                else result =0;
            } else if (value === "id") {
                if (a.id < b.id) result = -1;
                else if (a.id > b.id) result = 1;
                
                else result =0;
            }
            return  result;
        });
    }

    showDetail(event: any, currency: Currency) {
        localStorage.setItem("currency", JSON.stringify(currency));
    }
}