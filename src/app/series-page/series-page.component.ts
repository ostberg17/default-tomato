import { Component, OnInit } from '@angular/core';
import {Cards, CardsService} from "../services/cards.service";

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.scss']
})
export class SeriesPageComponent implements OnInit {
  public cards: Cards[] = []
  title: string = ''
  p: number = 1;
  search = '';

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    let filmResp = this.cardsService.getData('series')
      .subscribe(resp => {
        console.log(resp)
        this.cards = resp.filter(f=> f.programType === 'series')
        console.log(this.cards)
        this.title = 'series'
      })

    console.log('Film Resp',filmResp)
  }

}
