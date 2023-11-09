import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'src/app/local-storage/local-storage.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LocalStorageModule
  ]
})
export class HomeModule { }
