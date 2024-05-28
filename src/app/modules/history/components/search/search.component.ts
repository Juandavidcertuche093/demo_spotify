import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  src: string = ''

  constructor () {}

  ngOnInit(): void {
    
  }

  callsearch(term: string): void {
    if (term.length >= 3) {
      this.callbackData.emit(term)
      console.log('👀 llamamos a la API HTTP GET---->', term);
    }   

  }
}
