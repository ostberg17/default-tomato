import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators"

export interface FilmResponse {
  total: number;
  entries: Cards[];
}

export interface Cards {
  title: string;
  description: string;
  programType: string;
  images: IMovieImage;
  releaseYear: number;

}
export class IMovieImage {
  [key: string]: IMovieImageElement;
}

export interface IMovieImageElement {
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  cards: Cards[] = []



  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<FilmResponse>('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
      .subscribe(responce => {
        console.log(responce)
        this.cards = responce.entries
        console.log('Secong',this.cards)
      })
  }




}


