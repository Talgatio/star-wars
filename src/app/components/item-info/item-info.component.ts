import {Component, OnInit, OnDestroy} from '@angular/core';
import {RequestService} from '../../services/request.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit, OnDestroy {

  constructor(private req: RequestService,
              private activatedRoute: ActivatedRoute) {
  }

  profile: any = {};
  filmsSubscribe: Observable<any[]>;
  vehiclesSubscribe: Observable<any[]>;
  films: any[] = [];
  vehicles: any[] = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      const id = param['id'];
      this.req.get(`https://swapi.co/api/people/${id}`).subscribe(res => {
        this.profile = res;

        this.req.get(this.profile.homeworld).subscribe(resp => {
          this.profile.homeworld = resp;
        })

        this.filmsSubscribe = forkJoin(this.profile.films.map((url) => this.req.get(url)));
        this.filmsSubscribe.subscribe(resp => {
          console.log(resp);
          this.films = resp;
        });

        this.vehiclesSubscribe = forkJoin(this.profile.vehicles.map((url) => this.req.get(url)));
        this.vehiclesSubscribe.subscribe(resp => {
          console.log(resp);
          this.vehicles = resp;
        });
      });
    });
  }

  ngOnDestroy() {
  }

}
