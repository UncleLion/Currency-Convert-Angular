import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-currency-converter',
    templateUrl: './currency.converter.component.html',
    styleUrls: ['./currency.converter.component.scss']
})

export class CurrencyConverterComponent  implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'UAH';
  toCurrency: string = 'USD';
  convertedAmount: number = 0;
  exchangeRates: any[] = [];

    
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getExchangeRates();
  }
  
    getExchangeRates() {
      const url = 'https://api.monobank.ua/bank/currency';
      this.http.get(url).subscribe((data: any) => {
        this.exchangeRates = data;
      });
    }

    convertCurrency() {
      const fromRate = this.getRate(this.fromCurrency);
      const toRate = this.getRate(this.toCurrency);

      if (fromRate && toRate) {
        this.convertedAmount = (this.amount * fromRate.sellRate / toRate.sellRate);
      } else {
        this.convertedAmount = 0;
      }
    }

    getRate(currency: string) {
      return this.exchangeRates.find(rate => rate.currencyCodeA === currency);
    }
  }