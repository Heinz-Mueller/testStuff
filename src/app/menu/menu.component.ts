import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  hund: String = 'belo';
  katze: String = 'luna';

  tier: String = 'CAT';
  noise: String = 'meow';

  constructor() { }

  ngOnInit() {
  }

}
