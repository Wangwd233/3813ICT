import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: {name: string, email: string, id: string, role: string};

  user1: {name: string, email: string, id: string, role: string};

  isLogin = true;

  message='';

  name: string | null;

  

  constructor(private router: Router) {
    this.user= {name: "", email: '', id: '', role: "Normal user"};
    this.user1= {name: "", email: '', id: '', role: ""};
    this.name = '1';
  };

  ngOnInit(): void {
    //this.user ={email: '', password:''};
    //localStorage.clear();
  };
  
  loginClicked(){
        localStorage.setItem(this.user.id, JSON.stringify(this.user));
        this.message='Login successfully';
        this.user1 = JSON.parse(localStorage.getItem(this.user.id) || "{}");
        this.isLogin = false;
        this.router.navigate(['/account', this.user1.id]);
     };

  logoutClicked(){
        localStorage.removeItem(this.user1.id);
        this.isLogin = true;
        this.name = localStorage.getItem(this.user1.id);
        console.log(this.name);
  };
     
  }
  


