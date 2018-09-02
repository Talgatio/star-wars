import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/observable';
import {map, startWith} from 'rxjs/operators';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  isNext = null;
  isPrev = null;
  filter: any = {
    name: ''
  };

  options: string[] = [];
  peoples: any[] = [];

  constructor(private req: RequestService) {
    this.getPeople('https://swapi.co/api/people/');
  }

  getPeople(url) {
    this.options = [];
    this.filter.name = '';
    this.req.get(url).subscribe((res: any) => {
      this.peoples = res.results;
      this.isNext = res.next;
      this.isPrev = res.previous;
      res.results.forEach(item => {
        item.url = item.url.split('/')[5];
        this.options.push(item.name);
      });
    });
  }

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  changePage(url) {
    if (url !== null) {
      this.getPeople(url);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
