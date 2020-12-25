import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LipTripMainComponent } from './components/lip-trip-main/lip-trip-main.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: LipTripMainComponent }
];

@NgModule({
  declarations: [LipTripMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class LiptripModule { }
