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
import { JobsComponent } from './jobs/jobs.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { CreateSeniorprogramComponent } from './add-organization/create-seniorprogram/create-seniorprogram.component';
import { CreateOrphanageComponent } from './add-organization/create-orphanage/create-orphanage.component';
import { CreateHandicappedComponent } from './add-organization/create-handicapped/create-handicapped.component';
import { CreateDonationcenterComponent } from './add-organization/create-donationcenter/create-donationcenter.component';
import { CreateRehabcenterComponent } from './add-organization/create-rehabcenter/create-rehabcenter.component';
import { CreateFoodbankComponent } from './add-organization/create-foodbank/create-foodbank.component';
import { CreateVoluntaryComponent } from './add-organization/create-voluntary/create-voluntary.component';
import { DisplaySeniorprogramComponent } from './display-organization/display-seniorprogram/display-seniorprogram.component';
import { DisplayOrphanageComponent } from './display-organization/display-orphanage/display-orphanage.component';
import { DisplayHandicappedComponent } from './display-organization/display-handicapped/display-handicapped.component';
import { DisplayVoluntaryComponent } from './display-organization/display-voluntary/display-voluntary.component';
import { DisplayDonationcenterComponent } from './display-organization/display-donationcenter/display-donationcenter.component';
import { DisplayRehabcenterComponent } from './display-organization/display-rehabcenter/display-rehabcenter.component';
import { DisplayFoodbankComponent } from './display-organization/display-foodbank/display-foodbank.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';


const routes: Routes = [
  { path: "searchcolleges", component: SearchCollegeComponent },
  { path: "searchByRatio", component: SearchRatioComponent },
  { path: "searchByRatio/searchDynamic", component: SearchDynamicComponent },
  { path: "trainings", component: TrainingsComponent },
  { path: "jobs", component: JobsComponent },
  { path: "jobs/addOrganization", component: AddOrganizationComponent},
  { path: "addOrganization/createSeniorprogram", component: CreateSeniorprogramComponent},
  { path: "addOrganization/createOrphanage", component: CreateOrphanageComponent},
  { path: "addOrganization/createHandicapped", component: CreateHandicappedComponent},
  { path: "addOrganization/createDonationcenter", component: CreateDonationcenterComponent},
  { path: "addOrganization/createRehabcenter", component: CreateRehabcenterComponent},
  { path: "addOrganization/createFoodbank", component: CreateFoodbankComponent},
  { path: "addOrganization/createVoluntary", component: CreateVoluntaryComponent},
  { path: "displaySeniorprogram", component: DisplaySeniorprogramComponent},
  { path: "displayOrphanage", component: DisplayOrphanageComponent},
  { path: "displayHandicapped", component: DisplayHandicappedComponent},
  { path: "displayRehabcenter", component: DisplayRehabcenterComponent},
  { path: "displayDonationcenter", component: DisplayDonationcenterComponent},
  { path: "displayFoodbank", component: DisplayFoodbankComponent},
  { path: "displayVoluntary", component: DisplayVoluntaryComponent},
  { path : "homePage", component: HomePageComponent},
  { path : "homePage/manageOrganization", component: ManageOrganizationComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SearchCollegeComponent,
    SearchRatioComponent,
    SearchDynamicComponent,
    AddDailogComponent,
    DialogBoxComponent,
    TrainingsComponent,
    JobsComponent,
    AddOrganizationComponent,
    CreateSeniorprogramComponent,
    CreateOrphanageComponent,
    CreateHandicappedComponent,
    CreateDonationcenterComponent,
    CreateRehabcenterComponent,
    CreateFoodbankComponent,
    CreateVoluntaryComponent,
    DisplaySeniorprogramComponent,
    DisplayOrphanageComponent,
    DisplayHandicappedComponent,
    DisplayVoluntaryComponent,
    DisplayDonationcenterComponent,
    DisplayRehabcenterComponent,
    DisplayFoodbankComponent,
    HomePageComponent,
    ManageOrganizationComponent
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
