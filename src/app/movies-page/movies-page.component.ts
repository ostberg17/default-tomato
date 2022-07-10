import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';

import {Cards, CardsService} from "../services/cards.service";
import {Observable, Subscription} from "rxjs";
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from "@angular/material/datepicker";
import * as moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ActivatedRoute, Navigation, NavigationEnd, Params, Router, RoutesRecognized} from "@angular/router";





export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MoviesPageComponent),
      multi: true,
    },
  ],
})
export class MoviesPageComponent implements OnInit, OnDestroy{

  public cards: Cards[] = []
  public filteredCards: Cards[] = []
  title: string = ''
  p: number = 1;
  search = '';
  subscription = new Subscription();
  date = new FormControl(moment());

  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const myType = this.route.snapshot.url[0].path
    console.log('MY TYPE',myType)

    const filmResp = this.cardsService.getData(myType);
    this.subscription = filmResp
      .subscribe(resp => {
        console.log(resp)
        this.cards = resp.filter(f=> f.programType === myType)
        this.filteredCards = this.cards
        console.log(this.cards)
        this.title = myType
      })

    console.log('Film Resp',filmResp)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

  setYear(normalizedYear: moment.Moment, datepicker: MatDatepicker<any>) {
    const ctrlValue = this.date.value!;
    console.log('CtrValue',ctrlValue)
    ctrlValue.year(normalizedYear.year());

    this.date.setValue(ctrlValue);
    const currentYear = this.date.value?.year()
    console.log('0000',currentYear)
    this.filteredCards = this.cards.filter((f)=> f.releaseYear === currentYear)
    datepicker.close();
  }


  test1(value: string): void {
    this.filteredCards = this.cards.filter((f)=> f.title.toLowerCase().startsWith(value.toLowerCase()))
    console.log(this.cards)
  }
}



