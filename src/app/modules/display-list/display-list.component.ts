import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DisplayList} from '../home/home.component';
import {DeviceUtils} from '../../common/utils/device.utils';
import {Item} from '../../common/models/item.model';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {

  @Input() content: DisplayList;
  @Output() moveItem: EventEmitter<{ item: Item, newCategoryIndex: number, oldCategoryIndex: number }> =
    new EventEmitter<{ item: Item, newCategoryIndex: number, oldCategoryIndex: number }>();
  @Output() removeItem: EventEmitter<{ item: Item, categoryIndex: number }> = new EventEmitter<{ item: Item, categoryIndex: number }>();
  @Output() checkChange: EventEmitter<{ item: Item, categoryIndex: number }> = new EventEmitter<{ item: Item, categoryIndex: number }>();

  public isTouchDevice: boolean;
  public openItems: Array<string> = [];
  public rowDebounce: Array<string> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.isTouchDevice = DeviceUtils.IsTouchDevice();
  }

  public handleRowEvent(event: any, item: Item, categoryIndex?: number): void {
    if (event && event.type) {
      if (!this.rowDebounce.includes(item._id)) {
        switch (event.type) {
          case 'click':
            this.onCheckChanged(item, categoryIndex);
            break;
          case 'swipeleft':
            this.onItemSwipeLeft(item);
            break;
          case 'swiperight':
            this.openItems = this.openItems.filter((id: string) => id !== item._id);
            break;
        }

        if (!this.isTouchDevice) {
          // prevent issues with click and swipe event compatibility
          this.rowDebounce.push(item._id);

          // remove the debounce item to enable all actions
          window.setTimeout(() => {
            this.rowDebounce = this.rowDebounce.filter((id: string) => id !== item._id);
          }, 1);
        }
      }
    } else {
      console.error('row event is undefined or has no type', event);
    }
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
    this.checkChange.emit({item, categoryIndex});
  }

}
