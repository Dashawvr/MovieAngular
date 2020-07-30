import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies =  {};
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getMovies().subscribe(data => this.movies = data);
  }
}
