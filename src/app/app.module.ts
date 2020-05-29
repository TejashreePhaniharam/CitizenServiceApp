import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SearchCollegeComponent } from './search-college/search-college.component';
import { RouterModule, Routes, Router } from '@angular/router';
//import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SearchDynamicComponent } from './search-dynamic/search-dynamic.component';
import { SearchRatioComponent } from './search-ratio/search-ratio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatSliderModule } from '@angular/material/slider';
import { Http, Response, } from '@angular/http';
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { AddDailogComponent } from './add-dailog/add-dailog.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { TrainingsComponent } from './trainings/trainings.component';


const routes: Routes = [
  { path: "searchcolleges", component: SearchCollegeComponent },
  { path: "searchByRatio", component: SearchRatioComponent },
  { path: "searchByRatio/searchDynamic", component: SearchDynamicComponent },
  { path: "trainings", component: TrainingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCollegeComponent,
    SearchRatioComponent,
    SearchDynamicComponent,
    AddDailogComponent,
    DialogBoxComponent,
    TrainingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    MatSortModule, MatIconModule, MatPaginatorModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
