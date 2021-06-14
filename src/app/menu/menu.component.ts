import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tier: String = 'CAT';
  noise: String = 'meow';

  ja: String = 'ja';
  nein: String = 'nein';

  constructor() { }

  ngOnInit() {
  }

}
