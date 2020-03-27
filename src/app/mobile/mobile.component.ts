import { Component, OnInit } from '@angular/core';
import {products} from '../data/product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'description'];
  dataSource = products;
  constructor() { }

  ngOnInit(): void {
  }

}
