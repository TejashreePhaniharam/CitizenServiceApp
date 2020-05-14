import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Colleges } from '../search-college/Colleges';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable } from '@angular/material/table';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDailogComponent } from '../add-dailog/add-dailog.component';

@Component({
  selector: 'app-search-dynamic',
  templateUrl: './search-dynamic.component.html',
  styleUrls: ['./search-dynamic.component.css'],
  providers:[StudentServiceService],
})
export class SearchDynamicComponent implements OnInit {
  colleges1:Colleges[];
  colleges:Colleges[];
  scoresBycountry:Colleges[];
  tableColumns  :  string[] = ['categoryName','collegeScores','collegeUrl', 'collegeScholarships', 'countryName', 'internationalStudentsRatio'];
  datasource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  _id:any;
  categoryId: Number;
  categoryName: string;
  resourceType: string;  //website, video, twitter #hashtag
  collegeUrl: string;
  collegeName: string;
  collegeCost: string;
  collegeFacts: string;
  collegeScores: Number;
  internationalStudentsRatio: string;
  maleFemaleRatio: string;
  collegeResearchGrants: string; //high, average, low
  authorName: string;        //author 
  contributorName: string;      //contributor
  contributorEmail: string;
  contributorStoryLine: string;
  collegeStanding: string;    //high or good or average or below average
  collegeGPA: string;
  collegeScholarships: string;   //
  collegeCampusLife: string; //high or good or average or below average
  cityName: string;
  stateName: string;
  countryCode: string;
  countryName: string;
  resourceUploadedDate: string;
  collegeLocation: string;
  notes: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  localCampusInfo: string;    //categoryPage news
  alumniInfo: string;   //categoryPage pictures
  prospectus: string;// subCategoryPage pictures

  clicked:boolean=true;
   constructor(private route:ActivatedRoute,
     private studentservice:StudentServiceService){
      this.colleges1= this.colleges
   }
   
   ngOnInit(): void {
    this.studentservice.getColleges()
    .subscribe((collegeData)=>this.colleges = collegeData);
    console.log("here are the records !"+this.colleges  );
    this.colleges1= this.colleges
   }
 
   getCollegesByScores()
 {

     this.studentservice.getColleges()
     .subscribe((collegeData)=>this.colleges = collegeData);

     

 }

 public pageChanged = (id: string) => {

}
 
 getByCountryNameCollegeScores(countryName:string, collegeScores:Number)
 {

  this.studentservice.getByCountryNameCollegeScores(countryName, collegeScores).subscribe(data => {
    this.datasource = new MatTableDataSource(data);
    if (this.sort) // check it is defined.
    {
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
    }
  });

 }


 getByCountryNameCollegeScholarships(countryName:string, collegeScholarships:string)
 {

  this.studentservice.getByCountryNameCollegeScholarships(countryName,collegeScholarships ).subscribe(data => {
    this.datasource = new MatTableDataSource(data);
    if (this.sort) // check it is defined.
    {
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
    }
  });
}


  getByCountryNameCollegeStanding(countryName:string, collegeStanding:string)
 {

  this.studentservice.getByCountryNameCollegeStanding(countryName,collegeStanding ).subscribe(data => {
    this.datasource = new MatTableDataSource(data);
    if (this.sort) // check it is defined.
    {
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
    }
  });

 }

}
