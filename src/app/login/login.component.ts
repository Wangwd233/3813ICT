import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AccountComponent } from '../account/account.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: {name: string, email: string, id: string, role: string};

  user1: {name: string, email: string, id: string, role: string};

  isLogin = true;

  channelId : number;

  message = "";

  name: string | null;

  paramsub: Subscription;

  userId: string | null;


  constructor(private router: Router, private activate: ActivatedRoute) {
    this.user= {name: "", email: '', id: '', role: "Normal user"};
    this.user1= {name: "", email: '', id: '', role: ""};
    this.name = '1';
    this.channelId = 0;
    this.userId = "";
    this.paramsub = this.activate.paramMap.subscribe();
  };

  ngOnInit(): void {
    //this.user ={email: '', password:''};
    //localStorage.clear();
    this.paramsub = this.activate.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });

    if(this.userId !== "" || this.user1.id !== ""){
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  };
  
  loginClicked(){
        localStorage.setItem(this.user.id, JSON.stringify(this.user));
        this.message='Login successfully';
        this.user1 = JSON.parse(localStorage.getItem(this.user.id) || "{}");
        this.isLogin = false;
        //this.router.navigate(['/account', this.user1.id]);
     };

  logoutClicked(){
     if(this.userId !== ""){
        localStorage.removeItem(this.user1.id);
     }else{
      localStorage.removeItem(this.userId);
     }
        this.isLogin = true;
        this.name = localStorage.getItem(this.user1.id);
        console.log(this.name);
  };

  joinChannel(){
    if (this.channelId !== 0){
       this.router.navigate(['/channel', this.channelId, this.user1.id]);
    }else{
      alert("Choose the channel you want to join first");
    }
  };
     
  }

  


