import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppComponent } from './app.component';
import { ImageComponentComponent } from './image-component/image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent,

  ],
  imports: [
    BrowserModule,InfiniteScrollModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
