import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  
  @Input() appareilName: string ="tempo";
  @Input() appareilStatus: string ="tempo";
  @Input() id: number =0;
  @Input()
  indexOfAppareil!: number;

  constructor(private appareilService: AppareilService) { }


  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor () {
    if (this.appareilStatus == 'allume'){
      return 'green';
    }    
    else  {
      return 'red';
    }    
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
