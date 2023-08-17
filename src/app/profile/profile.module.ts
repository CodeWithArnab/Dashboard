import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProfileComponent } from './profile.component';




@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  
})
export class ProfileModule { }
