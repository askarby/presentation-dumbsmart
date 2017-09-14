import {
  Component,
  OnInit,
} from '@angular/core';
import { CarService } from './car.service';
import { PeopleService } from './people.service';
import { Data } from './data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public cars: Data[];
  public people: Data[];

  constructor(
    private carService: CarService,
    private peopleService: PeopleService) {

  }

  public ngOnInit(): void {
    this.carService.getCars().subscribe(cars => this.cars = cars);
    this.peopleService.getPeople().subscribe(people => this.people = people);
  }
}
