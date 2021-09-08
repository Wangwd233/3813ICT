
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})

export class AccountComponent implements OnInit {
  userid: string | null;
  paramsub: Subscription;
  
  constructor(private route: ActivatedRoute) { 
    this.userid = "";
    this.paramsub = this.route.paramMap.subscribe();
  }

  ngOnInit(): void {
    this.paramsub = this.route.paramMap.subscribe(params => {
      this.userid = params.get('id');
    });
  }

  unsub(){
    this.paramsub.unsubscribe();
  }
}