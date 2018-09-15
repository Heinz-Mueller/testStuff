import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [
    { text: 'erster twet', user: 'peter'},
    { text: 'zweiter tweeeti', user: 'glenn'}
  ];

  tweets2 = [
        { body: 'Always code as if the guy  you live.', author: 'Glen', ava: 'a.jpg', date: new Date(), retweets: [ 'Joe'], favorites: [] },
        { body: 'Measuring progrcraft gress by weight', author: 'Joe', ava: 'b.jpg', date: new Date(), retweets: [], favorites: ['Mary'] },
        { body: 'Debugging is twice  debug it.', author: 'Mary', ava: 'c.png', date: new Date(), retweets: ['Glen'], favorites: ['Mary'] },
        { body: 'People thiner, liwani stones', author: 'Glen', ava: 'a.jpg', date: new Date(), retweets: [ 'Joe', 'Mary'], favorites: [] },
        { body: 'You can’t havesfual families.', author: 'Joe', ava: 'b.jpg', date: new Date(), retweets: [], favorites: ['Mary', 'Glen'] },
      ];

  constructor() { }

  ngOnInit() {
  }

}
