import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';
  name: string;
  result: string;
  factsArray: Array<string>;

  constructor(private data: DataService) {
    this.name = 'aayush';
  }

  ngOnInit(){
    this.data.getAllFacts().subscribe((d: Array<string>) => {
      this.factsArray = d;
    });
  }
  // getData() {
  //    this.data.getFact(this.name).subscribe((d) => {
  //      this.result = d;
  //      this.data.postData(d)
  //      .subscribe((result) => {
  //        console.log(result);
  //      });
  //    }));
  // }
}
