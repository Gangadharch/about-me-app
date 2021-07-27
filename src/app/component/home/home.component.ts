import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    members: {title: string, subtitle: string, content: string, url: string}[] = [
        {title: 'Angular', subtitle: 'Angulat All versions', content: 'Extensive knowledge in developing applications in a single page (SPAs) using various JavaScript frameworks like Angular', url: 'assets/angularjs8-360x270.jpg'},
        {title: 'Dotnet', subtitle: 'C#.Net, Core', content: "Experience in working with RESTFUL Web Services and implementing RESTFUL API's. And working knowledge on Sql intraction", url: 'assets/ASP.NET-Web-api.jpg'},
        {title: 'ReactJs', subtitle: 'ReactWeb', content: 'Extensive knowledge in developing applications in a single page (SPAs) using various JavaScript frameworks like ReactJs', url: 'assets/ReactJS-360x270.jpg'},
      ];
  constructor() { }

  ngOnInit(): void {
  }

}
