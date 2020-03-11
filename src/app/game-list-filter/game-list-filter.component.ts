import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.scss']
})
export class GameListFilterComponent {

    types = [];
    
    @Input()
    categories = ['RPG', 'FPS', 'Simulation', 'Action', 'Aventure' ];



    constructor(){

   
   }

}
