import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  channelId: string | null;
  paramsub: Subscription;
  userId : string | null;

  constructor(private router: Router, private activatedroute: ActivatedRoute) { 
    this.channelId = "";
    this.paramsub = this.activatedroute.paramMap.subscribe();
    this.userId = "";
  };

  ngOnInit(): void {
    this.paramsub = this.activatedroute.paramMap.subscribe(params => {
      this.channelId = params.get('id');
      this.userId = params.get('userid');
    })
  }

  back(){
    this.paramsub.unsubscribe();
    this.router.navigate(['/login', this.userId]);
  };

  
}


