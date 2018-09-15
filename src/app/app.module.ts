import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { TestCompComponent } from './test-comp/test-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

