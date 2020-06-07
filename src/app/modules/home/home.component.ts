import {Component, OnDestroy, OnInit} from '@angular/core';
import {Descriptor} from '../../common/models/descriptor.model';
import {ActivatedRoute} from '@angular/router';
import {ListsMock} from '../../../mocks/lists.mocks';
import {List} from '../../common/models/list.model';
import {Item} from '../../common/models/item.model';
import {Subscription} from 'rxjs';
import {loadConfigurationFromPath} from 'tslint/lib/configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public state: 'edit' | 'readonly' = 'readonly';
  public activeList: Descriptor = {
    description: undefined,
    title: 'Listy list',
  };
  public displayList: DisplayList;
  public list: List;
  public id: string;
  public openItems: Array<string> = [];
  public rowDebounce: Array<string> = [];
  private subscription: Subscription = new Subscription();

  constructor(private readonly route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.route.queryParams.subscribe(queryParams => {
      this.id = queryParams.id;

      if (this.id) {
        //  load list items
        this.list = JSON.parse(JSON.stringify(ListsMock.find(list => list._id === this.id)));

        //  group items by category
        this.mapDisplayList(this.list);
      }
    }));
    //  update active list details variable for current list
  }

  public handleRowEvent(event: any, item: Item, categoryIndex?: number): void {
    if (event && event.type) {
      if (!this.rowDebounce.includes(item._id)) {
        switch (event.type) {
          case 'click':
            this.rowDebounce.push(item._id);
            this.onCheckChanged(item, categoryIndex);
            break;
          case 'swipeleft':
            this.rowDebounce.push(item._id);
            this.onItemSwipeLeft(item);
            break;
          case 'swiperight':
            this.openItems = this.openItems.filter((id: string) => id !== item._id);
            break;
        }

        // prevent issues with click and swipe event compatibility
        window.setTimeout(() => {
          this.rowDebounce = this.rowDebounce.filter((id: string) => id !== item._id);
        }, 1);
      }
    } else {
      console.error('row event is undefined or has no type', event);
    }
  }

  public onCancelEdit(): void {
    this.state = 'readonly';
    //  revert list to initial state before the user began editing
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public updateListItems(item: Item, categoryIndex: number): void {
    const itemIndex: number = this.displayList.categoryItems[categoryIndex].items
      .findIndex(categoryItem => categoryItem._id === item._id);

    this.displayList.categoryItems[categoryIndex].items[itemIndex] = item;
    //  apply changes to original list
    //  make service call to update list on server
  }

  public updateListCategory(category: string, categoryIndex: string): void {
    this.displayList.categoryItems[Number(categoryIndex)].category = category;
    //  apply changes to original list
    //  make service call to update list on server
  }

  public addNewItem(): void {

  }

  public removeListItem(item: Item, categoryIndex: number): void {

  }

  private onItemSwipeLeft(item: Item): void {
    if (this.openItems && this.openItems.includes(item._id)) {
      this.openItems = this.openItems.filter((id: string) => id !== item._id);
    } else {
      this.openItems.push(item._id);
    }
  }

  private onCheckChanged(item: Item, categoryIndex: number): void {
    window.navigator.vibrate(2); // this will only work on android devices - https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
    item.status = item.status === 'done' ? undefined : 'done';
    this.openItems = this.openItems.filter((id: string) => id !== item._id);
    this.updateListItems(item, categoryIndex);
  }

  private mapDisplayList(list: List): void {
    // create a display list that consists of categories with items
    const title: string = list.details && list.details.title;
    const description: string = list.details && list.details.description;
    const categoryItems: Array<CategoryItem> = [];

    if (list && list.items) {
      const categories: Array<string> = [...new Set(list.items.map(item =>
        item.category
      ))];
      categories.forEach((category: string, index: number) => {
        const items: Array<Item> = list.items && list.items.filter(item => item.category === category);
        categoryItems.push({
          index,
          category,
          items
        });
      });
    }

    this.displayList = {
      title,
      description,
      categoryItems
    };

    this.activeList = {
      title,
      description
    };
  }

//  allow user to drag item to a different category
//  allow user to update item tile and description
//  update list items when user clicks on save icon

}


export interface DisplayList {
  title: string;
  description: string;
  categoryItems: Array<CategoryItem>;
}

export interface CategoryItem {
  index: number;
  category: string;
  items: Array<Item>;
}
