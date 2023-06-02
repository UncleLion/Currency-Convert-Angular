import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorkSpace'

  productList = [];
  selectedProduct: any;
  value = [];

  
  search($event: any) {
    console.log($event)
  }
}
  

