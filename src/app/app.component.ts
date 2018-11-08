import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mocat';
  ngOnInit(): void {
    window.location.href = 'http://translate.google.com';
  }
}
