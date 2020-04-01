import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'pricing', component: PricingComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'course', component: CourseComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [CommonModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
