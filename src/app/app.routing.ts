import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'organizations', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
   
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
