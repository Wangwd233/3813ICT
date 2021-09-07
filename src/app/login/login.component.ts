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

  public id = "variable works!";

  user2={email:'',password:''};
  
  user3={email:'',password:''};

  message='';

  name: string | null;

  

  constructor(private router: Router) {
    this.user= {name: "", email: '', id: '', role: "Normal user"};
    this.user1= {name: "", email: '', id: '', role: ""};
    this.name = '';
  };

  ngOnInit(): void {
    //this.user ={email: '', password:''};
  };
  
  loginClicked(){
        localStorage.setItem(this.user.id, JSON.stringify(this.user));
        this.message='Login successfully';
        this.router.navigate(['/account', this.id]);
        this.user1 = JSON.parse(localStorage.getItem(this.user.id) || "{}");
     };
     
  }
  


