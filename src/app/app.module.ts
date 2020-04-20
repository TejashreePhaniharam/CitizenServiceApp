import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchCollegeComponent } from './search-college/search-college.component';
import {RouterModule, Routes, Router}  from '@angular/router';
//import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SearchDynamicComponent } from './search-dynamic/search-dynamic.component';
import { SearchRatioComponent } from './search-ratio/search-ratio.component';

const routes: Routes = [
  { path: "searchcolleges", component: SearchCollegeComponent },
  { path: "searchByRatio", component: SearchRatioComponent },
  { path: "searchByRatio/searchDynamic", component: SearchDynamicComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCollegeComponent,
    SearchRatioComponent,
    SearchDynamicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
