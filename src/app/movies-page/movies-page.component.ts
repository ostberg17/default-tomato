import {Component, Input, OnInit} from '@angular/core';

import {Cards, CardsService} from "../services/cards.service";



@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit{

  public cards: Cards[] = []
  title: string = ''
  p: number = 1;
  search = '';
  currentType: string = '';





  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    let filmResp = this.cardsService.getData(this.currentType)
      .subscribe(resp => {
        console.log(resp)
        this.cards = resp.filter(f=> f.programType === this.currentType)
        console.log(this.cards)
        this.title = this.currentType
      })

    console.log('Film Resp',filmResp)
  }

}



