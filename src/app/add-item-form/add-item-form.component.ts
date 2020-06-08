import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';
import { BudgetItem } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit 
{

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() 
  {

  }

  ngOnInit(): void 
  {
    // if item has a value
    if (this.item)
    {
      // an existing item object was passed into this component, so this is not a new iteam
      this.isNewItem = false;

    } else {
      this.isNewItem = true;
      this.item = new BudgetItem( '', null );
    }
  }

  onSubmit(form: NgForm)
  {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
