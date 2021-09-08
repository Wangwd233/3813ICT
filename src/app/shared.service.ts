
import { Injectable } from '@angular/core';
import * as globals from 'src/app/globals';

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
