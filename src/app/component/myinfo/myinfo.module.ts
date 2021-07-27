import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyinfoRoutingModule } from './myinfo-routing.module'
import { MyinfoComponent } from './myinfo.component'
import { AllMaterialModule } from '../../../material-module'

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../../in-memory-data-service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MyinfoRoutingModule,
    AllMaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers:    [ InMemoryDataService ],
  declarations: [MyinfoComponent]
})
export class MyinfoModule { }