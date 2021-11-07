import { HttpResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { isLowercase, IsNotEmpty } from 'class-validator';
import { Observable } from 'rxjs';
import { Config } from './interfaces/getHTTP.interface';
import { FirstService } from './services/first.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private first:FirstService){}
  data !: Config[]

  ngOnInit():void{
    this.gethttp()
  }

  gethttp(){
    this.first.getAPI()
      .subscribe((el: any) =>{
        this.data = el
        console.log(el);

        console.log(this.data);
      })
  }
  posthttp(){
    console.log('post');

    this.first.postAPI()
    .subscribe(el =>{
      console.log(el );

    })
  }
}
