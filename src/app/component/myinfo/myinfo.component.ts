import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface abourMe {
  id: number;
  name: string;
  college:string;
  email:string;
  Number:string;
  location:string;
}

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  selfIntro: abourMe[]=[];
  private heroesUrl = 'api/aboutme'; 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getHeroes().subscribe(
      data => this.selfIntro = data
    )
  }

  getHeroes(): Observable<abourMe[]> {
    return this.http.get<abourMe[]>(this.heroesUrl)
  }

}
