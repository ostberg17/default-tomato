import { Pipe, PipeTransform } from '@angular/core';
import {Cards} from "../services/cards.service";


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cards: Cards[], search: string = ''): Cards[] {
    if(!search.trim()){
      return cards
    }
    return cards.filter(card =>{
      console.log('!!!!!!!!!',cards)
      return card.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
