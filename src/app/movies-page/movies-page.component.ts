import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {Cards, CardsService} from "../services/cards.service";
import {Observable, Subscription} from "rxjs";



@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit, OnDestroy{

  public cards: Cards[] = []
  title: string = ''
  p: number = 1;
  search = '';
  subscription = new Subscription();






  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    const filmResp = this.cardsService.getData('movie');
    this.subscription = filmResp
      .subscribe(resp => {
        console.log(resp)
        this.cards = resp.filter(f=> f.programType === 'movie')
        console.log(this.cards)
        this.title = 'movie'
      })

    console.log('Film Resp',filmResp)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

}



