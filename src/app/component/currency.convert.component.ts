
import { Component } from '@angular/core';
import { Event } from '@angular/router';
import { SelectItemGroup } from 'primeng/api';
import { CountryService } from 'src/app/component/service/countryservice';

@Component({
    selector: 'autocomplete-template-demo',
    templateUrl: './currency.converter.components.ts',
    styleUrls: ['./currency.converter.components.scss']
})
export class AutocompleteTemplateDemo {
    countries!: any[];

    items!: any[];

    groupedCities!: SelectItemGroup[];

    selectedCountryAdvanced!: any[];

    filteredCountries!: any[];

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });

        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];

        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }

    filterCountry(event: Event) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}

// import { Component, OnInit } from "@angular/core";
// import { HttpClient } from '@angular/common/http';


// @Component({
//     selector: 'app-currency-converter',
//     templateUrl: './currency.converter.component.html',
//     styleUrls: ['./currency.converter.component.scss']
// })

// export class CurrencyConverterComponent  implements OnInit {
//   amount: number = 1;
//   fromCurrency: string = 'UAH';
//   toCurrency: string = 'USD';
//   convertedAmount: number = 0;
//   exchangeRates: any[] = [];

    
//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.getExchangeRates();
//   }
  
//     getExchangeRates() {
//       const url = 'https://api.monobank.ua/bank/currency';
//       this.http.get(url).subscribe((data: any) => {
//         this.exchangeRates = data;
//       });
//     }

//     convertCurrency() {
//       const fromRate = this.getRate(this.fromCurrency);
//       const toRate = this.getRate(this.toCurrency);

//       if (fromRate && toRate) {
//         this.convertedAmount = (this.amount * fromRate.sellRate / toRate.sellRate);
//       } else {
//         this.convertedAmount = 0;
//       }
//     }

//     getRate(currency: string) {
//       return this.exchangeRates.find(rate => rate.currencyCodeA === currency);
//     }
//   }