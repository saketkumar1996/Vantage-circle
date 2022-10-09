import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {

  constructor(private httpService:HttpServiceService){}
  urlArray:any;
  ngOnInit(){
    this.httpService.getListOfAllImages().subscribe(res =>{
      this.urlArray = res;
      // this.url = "https://images.unsplash.com/13/unsplash_523b1f5aafc42_1.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80";
      console.log(this.urlArray);
      
    })
  }
  onScroll(){
    console.log("scolling");
    
  }
}
