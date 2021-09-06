import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: {email:string,password:string};

  user1={email:'',password:''};

  user2={email:'',password:''};
  
  user3={email:'',password:''};

  message='';

  constructor(private router: Router) {
    this.user={email:'', password:''}
  };

  ngOnInit(): void {
    //this.user ={email: '', password:''};

    this.user1 = {email:'8888@gmail.com',password: '1234'};

    this.user2 = {email:'2357@gmail.com',password: '9879'};

    this.user3 = {email:'w9879@gmail.com',password: 'werwe'};
  }
  
  loginClicked(){
     if ((this.user.email==this.user1.email && this.user.password==this.user1.password)||(this.user.email==this.user2.email && this.user.password==this.user2.password)
     ||(this.user.email==this.user3.email && this.user.password==this.user3.password)) {
        this.message='Login successfully';
        this.router.navigate(['account']);
     } 
     else {
        this.message='Try again';
     }
     
  }
  

}
