import { Component, OnInit } from '@angular/core';
import { Observable,Observer } from 'rxjs';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  http$ !: Observable<number>




  constructor() { }


  ngOnInit():void{
     this.http$ = new Observable((obs : Observer<number>) =>{
       obs.next(1)
       obs.next(2)
       obs.next(3)
       obs.next(4)
    })
    this.http$.subscribe(el =>{
      console.log(el);
    })
  }

}
