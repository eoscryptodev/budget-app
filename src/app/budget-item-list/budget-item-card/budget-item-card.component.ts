import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() 
  {

  }

  ngOnInit(): void 
  {

  }

  onXButtonClick()
  {
    // here we want want to emit an event
    this.xButtonClick.emit();
  }

  onCardClick()
  {
    this.cardClick.emit();
  }

}
