import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
//import { AppService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*constructor(private appService: AppService) { }

changeGV(val: string[]){
this.appService.setGroup(val);

}

showGV(val: string[]){
alert("GV: " + this.appService.getGroup(val));

}*/

}

