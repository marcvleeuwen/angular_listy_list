import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ListsMock} from '../../../mocks/lists.mocks';
import {List} from '../../common/models/list.model';
import {Descriptor} from '../../common/models/descriptor.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() public lists: Array<List> = ListsMock;
  @Input() public toolbarTitle: Descriptor;
  @Input() public state: 'edit' | 'readonly' = 'readonly';
  @Output() public stateChange: EventEmitter<'edit' | 'readonly'> = new EventEmitter<'edit' | 'readonly'>();
  public listsToDisplay: Array<List> = this.lists;
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public activeListId: string;

  private shouldToggleDrawer: boolean;
  @ViewChild('drawer') private drawerElementRef: ElementRef;

  constructor(private readonly breakpointObserver: BreakpointObserver,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeListId = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.isHandset$.subscribe((res) => this.shouldToggleDrawer = res);
  }

  public onEditClick(): void {
    // change content to be editable
    this.state = 'edit';
    this.stateChange.emit('edit');
  }

  public onDoneClick(): void {
    // Save state changes and send service request
    this.state = 'readonly';
    this.stateChange.emit('readonly');
  }

  public onSettingsClick(): void {
    console.log('user-settings clicked');
  }

  public filterList(term: string): void {
    if (!term || term.length <= 0) {
      this.listsToDisplay = this.lists;
      return;
    }

    term = term.toLowerCase();

    this.listsToDisplay = this.lists.filter(l => {
      if (l.details) {
        return (l.details.title
          && l.details.title.toLowerCase().includes(term))
          || (l.details.description
            && l.details.description.toLowerCase().includes(term));
      }
      return false;
    });
  }

  public onListClick(list: List): void {
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: {id: list._id}
      }).then(() => {
      this.activeListId = list._id;
      if (this.shouldToggleDrawer) {
        // @ts-ignore
        this.drawerElementRef.toggle();
      }
    });
  }
}
