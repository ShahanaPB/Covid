import { Component, OnInit } from '@angular/core';
import {CovidService} from '../covid.service';
import {HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
url;
  constructor( public http:HttpClient) { }

  ngOnInit() : void{
    this.http.get("http://localhost:3000/patients").subscribe((users)=>{
      this.url=users;
      console.log(this.url);
    })
  }

}
