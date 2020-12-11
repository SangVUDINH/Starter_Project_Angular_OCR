import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

import { Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  secondes!: number;
  counterSubscription: Subscription = new Subscription;

  constructor(){
  }
  
  
  ngOnInit(){
    const counter  = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value:number)=>{
        this.secondes= value;
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }


}
