import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
    games = [
      {
        id: 1,
        name : 'jeu 1',
        type: 'FPS', 
        imageUrl : 'http://fr.web.img2.acsta.net/r_640_360/newsv7/19/10/02/14/40/0264113.jpg',
        iconeUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEYc7ERs9Xhq2F-Wi6KlgGaW5ve1_QsUc920myzTxBt3pOPrI&s',
        note : 3,
        description : 'Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico urgente vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut delatus aut postulatus, capite vel multatione bonorum aut insulari solitudine damnabatur.'
      },
      {
        id: 2,
        name : 'jeu 2',
        type: 'Aventure', 
        imageUrl : 'https://img.phonandroid.com/2019/11/resident-evil-3-ps4-officiel.jpg',
        iconeUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEYc7ERs9Xhq2F-Wi6KlgGaW5ve1_QsUc920myzTxBt3pOPrI&s',
        note : 2,
        description : 'lolllazdzd '
      },
      {
        id: 3,
        name : 'jeu 3',
        type: 'RPG', 
        imageUrl : 'https://www.loutrage.fr/wp-content/uploads/2017/05/final_fantasy_XV_entete.png',
        iconeUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEYc7ERs9Xhq2F-Wi6KlgGaW5ve1_QsUc920myzTxBt3pOPrI&s',
        note : 5,
        description : 'loremp'
      }
    ]
  constructor() { 
  }
  ngOnInit() {
  }

  LimitDescrip(description){

    if( description.split(' ').length <= 20 ){
        return description;
    } else {
        return description.split(' ', 20).join(' ') + '...';
    }
  }

  onClickBtn(value: string, gameName: string) {
    alert('Le bouton suivant à été cliqué : ' + value + 
      '\nSur le jeux : ' + gameName )
  }
}
