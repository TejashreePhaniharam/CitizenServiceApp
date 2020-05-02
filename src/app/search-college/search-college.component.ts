import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Colleges} from '../search-college/Colleges';
import { Injectable, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable } from '@angular/material/table';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDailogComponent } from '../add-dailog/add-dailog.component';



@Component({
  selector: 'app-search-college',
  templateUrl: './search-college.component.html',
  styleUrls: ['./search-college.component.css'],
  providers:[StudentServiceService],
})
export class SearchCollegeComponent implements OnInit {
 colleges1:Colleges[];
 colleges:Colleges[];

 datasource;
  tableColumns  :  string[] = ['_id','categoryName','collegeScores','collegeUrl', 'collegeScholarships', 'countryName', 'internationalStudentsRatio', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  college = new Colleges();  
  _id:any;
  categoryId: Number;
  categoryName: string;
  resourceType: string;  //website, video, twitter #hashtag
  collegeUrl: string;
  collegeScores: string;
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

  constructor(private route:ActivatedRoute,
    private studentservice:StudentServiceService, public dialog: MatDialog){

  }
  ngOnInit(): void {
   
  }
  public doFilter = (value: string) => {
    this.datasource.filter = value.trim().toLocaleLowerCase();
  }

  openDialog(action,obj): void {
    obj.action = action;

    const dialogRef = this.dialog.open(AddDailogComponent, {
      width: '1000',
      data:obj
      // data: { 
      //   categoryName: this.categoryName,collegeScores: this.collegeScores, collegeUrl: this.collegeUrl, collegeScholarships: this.collegeScholarships, countryName: this.countryName }
    
    
    });

    dialogRef.afterClosed().subscribe(result => {


      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        console.log("came here")
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }else if(result.event == 'Details'){
        this.detailsRowData(result.data);
      }


    });
  }

  ngAfterViewInit(): void
  {
    this.studentservice.getColleges().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      if (this.sort) // check it is defined.
      {
          this.datasource.sort = this.sort;
          this.datasource.paginator = this.paginator;
      }
    });
  }

  public addRowData(row_obj) {
       console.log(" categoryName "+row_obj.categoryName)
       console.log(" collegeScores "+row_obj.collegeScores)
       console.log(" collegeUrl "+row_obj.collegeUrl)
       console.log(" countryName "+row_obj.countryName)
       console.log(" collegeScholarships "+row_obj.collegeScholarships)
    this.college.categoryName=row_obj.categoryName,
    this.college.collegeScores=row_obj.collegeScores
    this.collegeUrl=row_obj.collegeUrl,
    this.college.countryName=row_obj.countryName,
    this.college.collegeScholarships=row_obj.collegeScholarships,



    this.studentservice.createCollege(this.college)
    .subscribe((certificationData)=>this.college = certificationData)
    this.table.renderRows();
  }
 
  public updateRowData (row_obj){

    this.datasource = this.datasource.filter((value,key)=>{
      if(value._id == row_obj._id){
        value.categoryName = row_obj.categoryName;

      }
      return true;
    });
  }
 
  public detailsRowData (row_obj){

    this.datasource = this.datasource.filter((value,key)=>{
      if(value.categoryId == row_obj.categoryId){
        value.categoryName = row_obj.categoryName;

      }
      return true;
    });
  }

  deleteRowData(row_obj){
    this.datasource = this.datasource.filter((value,key)=>{
      return value._id != row_obj._id;
    });
  }


  public pageChanged = (id: string) => {

  }
  
  loopForUrls(){
    
  }


addColleges()
{
  if (this.colleges==null){
    this.studentservice.getColleges()
    .subscribe((collegeData)=>this.colleges = collegeData);
    console.log("here are the records !"+this.colleges  );
   this.colleges1= this.colleges
  }
  else{
    this.colleges1=this.colleges1;
  }
 
}
}
