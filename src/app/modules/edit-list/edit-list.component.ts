import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DisplayList} from '../home/home.component';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  @Input() displayList: DisplayList;
  @Output() displayListChange: EventEmitter<DisplayList> = new EventEmitter<DisplayList>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public addNewItem(title: string, categoryIndex: number): void {
    this.displayList.categoryItems[categoryIndex].items.push({
      details: {
        title
      },
      category: this.displayList.categoryItems[categoryIndex].category,
      _id: `${categoryIndex}${this.displayList.categoryItems[categoryIndex].items.length}`
    });

    this.displayListChange.emit(this.displayList);
  }

  public addNewCategory(title: string): void {
    this.displayList.categoryItems.push({
      index: this.displayList.categoryItems.length,
      category: title,
      items: []
    });

    this.displayListChange.emit(this.displayList);
  }

}
