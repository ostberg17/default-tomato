import {Component, OnInit, Output} from '@angular/core';
import {CardsService} from "../services/cards.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  constructor(private cardsService: CardsService, private router: Router) { }


  ngOnInit() {

  }


  showMovies() {
    this.router.navigate(['/movie'])
  }

  showSeries() {
    this.router.navigate(['/series'])
  }
}
