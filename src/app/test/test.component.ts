import { isEmptyExpression } from '@angular/compiler';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { stringify } from 'querystring';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'datepresistence';
  name: string | null;
  obj: {name: string, email: string, id: number, role: string};
  user: {name: string, email: string, id: number, role: string};
  user1: string
  id = 1;
  Empty = true;

  constructor(private router: Router) { 
    this.name = "";
    this.user = {name: "Tom", email: "Tom@gmail.com", id: 1, role: "user"};
    this.user1 =''
    this.obj = {name: "", email: '', id: 5, role: ""};
    
  }

  ngOnInit(): void {
    console.log("Testing if DOM is ready");
    
    if(typeof(Storage) !== "undefined"){
       console.log('Storage ready');
       localStorage.setItem("lastname", "Smith");
       console.log(localStorage.getItem("lastname"));

    }else{
       console.log("No storage Support");
    }
       localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this.user1));
       localStorage.setItem("user.test", JSON.stringify(this.user));
  };

  test(){
    let lastname = localStorage.getItem("lastname");
    this.name =  JSON.parse(localStorage.getItem(JSON.stringify(this.id)) || "[]");
    this.obj = JSON.parse(localStorage.getItem("user.test") || "{}");
    this.user1 = JSON.stringify(this.obj);
    console.log(this.obj);
    this.router.navigate(['/test2', this.user.id]);
    this.router.navigateByUrl('/test2');

    if(this.obj != {name: "", email: '', id: 5, role: ""}){
        this.Empty = false;
    };
  }

}


