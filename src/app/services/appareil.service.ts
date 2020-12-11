import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  constructor() { }

  private appareils=[
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

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }


  switchOnAll(){
    for (let element of this.appareils){
      element.status='allume';
    }
    this.emitAppareilSubject();
  }

  switchOffAll(){
    for (let element of this.appareils){
      element.status='eteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index:number){
    this.appareils[index].status = 'allume';
    this.emitAppareilSubject();
  }

  switchOffOne(index:number){
    this.appareils[index].status = 'eteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){
    const appareilObject = {
      id : 0,
      name: '',
      status: ''
    }

    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1 )].id +1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

}
