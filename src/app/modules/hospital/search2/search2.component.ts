import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class SearchComponent2 implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue : string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}