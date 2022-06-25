import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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

@Injectable({providedIn: 'root'})
export class CardsService{
  constructor(private http: HttpClient) {
  }

  getData(currentType: string){
    return this.http.get<FilmResponse>('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
      .pipe(
        map(val => val.entries)
      )

  }
}
