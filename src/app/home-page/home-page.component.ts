import {Component, OnInit, Output} from '@angular/core';
import {CardsService} from "../services/cards.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {

  constructor(private cardsService: CardsService) { }



  showCards(currentType: string) {
    this.cardsService.getData(currentType)
  }
}
