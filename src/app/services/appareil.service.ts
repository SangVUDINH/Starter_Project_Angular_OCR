import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor() { }

  appareils=[
    {id:1,name:'NOM1', status:'eteint'},
    {id:2,name:'NOM2', status:'eteint'},
    {id:3,name:'NOM333', status:'allume'}
  ];

  getAppareilById(id:number){
    const appareil = this.appareils.find(
      (appareilObj)=>{
        return appareilObj.id === id;
      }
    );
    return appareil;
  }


  switchOnAll(){
    for (let element of this.appareils){
      element.status='allume';
    }
  }

  switchOffAll(){
    for (let element of this.appareils){
      element.status='eteint';
    }
  }

  switchOnOne(index:number){
    this.appareils[index].status = 'allume';
  }

  switchOffOne(index:number){
    this.appareils[index].status = 'eteint';
  }

}
