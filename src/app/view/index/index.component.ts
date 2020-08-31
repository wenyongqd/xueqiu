import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  quoteList = [];
  constructor() {
    this.getData()
  }

  ngOnInit(): void {
  }
  async getData(){
    let httpUrl = 'http://localhost:8080/api/index/quote'
    let result = await axios.get(httpUrl);
    this.quoteList = result.data.data.items
  }
}
