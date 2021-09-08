import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
  {path:'login/:id', component: LoginComponent},
  {path:'account/:id', component: AccountComponent},
  {path:'test', component: TestComponent},
  {path:'test2/:id', component: Test2Component},
  {path:'channel/:id/:userid', component: ChannelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
