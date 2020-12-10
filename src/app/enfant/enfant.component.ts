import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
