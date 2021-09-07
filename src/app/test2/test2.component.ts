import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  userid!: string;

  constructor(private route: ActivatedRoute) {

   };

  ngOnInit(): void {
    this.userid = JSON.stringify(this.route.snapshot.params.id);
    console.log(this.userid);
  }
  
};
