import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
export const base_path="http://localhost/api/index.php/home";

@Injectable()

export class AppService{
 myGroupList : Array<string>;

constructor(){
this.myGroupList = ["group1", "group2", "group3"];

alert("My intial global variable value is: " + this.myGroupList);

}

setGroup(val: Array<string>){
this.myGroupList = val;

}

getGroup(val: Array<string>){
return this.myGroupList;

}

}
