import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../../student-service.service';
import { Injectable, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable } from '@angular/material/table';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDailogComponent } from '../../add-dailog/add-dailog.component';
import { Handicapped } from './Handicapped';

@Component({
  selector: 'app-display-handicapped',
  templateUrl: './display-handicapped.component.html',
  styleUrls: ['./display-handicapped.component.css'],
  providers:[StudentServiceService],
})
export class DisplayHandicappedComponent implements OnInit {
  handicapped1:Handicapped[];
  handicapped:Handicapped[];
 
  datasource;
   tableColumns  :  string[] = ['centerName','speciality','gender', 'agecriterion', 'modeofOperation', 'description', 'action'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
handicapps = new Handicapped();
_id: any;
centerName: string;
centerType: string;
speciality: string;
centerId: string;
gender: string;
phone: string;
agecriterion: string;
contactPerson: string;
email: string;
websiteUrl: string;
modeofOperation: string;
maleStrength: string;
femaleStrength: string;
totalStrength: string;
staffSize: string;
description: string;
state: string;
countryName: string;  
 
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
      width: '3000',
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
    this.studentservice.getHandicapped().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      if (this.sort) // check it is defined.
      {
          this.datasource.sort = this.sort;
          this.datasource.paginator = this.paginator;
      }
    });
  }
  public addRowData(row_obj) {
    console.log(" centerName "+row_obj.centerName)
    console.log(" agecriterion "+row_obj.agecriterion)
    console.log(" gender "+row_obj.gender)
    console.log(" modeofOperation "+row_obj.modeofOperation)
    console.log(" description "+row_obj.description)
 this.handicapps.centerName=row_obj.centerName,
 this.handicapps.agecriterion=row_obj.agecriterion
 this.handicapps.gender=row_obj.gender,
 this.handicapps.modeofOperation=row_obj.modeofOperation,
 this.handicapps.description=row_obj.description,



 this.studentservice.createHandicapped(this.handicapps)
 .subscribe((certificationData)=>this.handicapps = certificationData)
 this.table.renderRows();
}

public updateRowData (row_obj){

 this.datasource = this.datasource.filter((value,key)=>{
   if(value._id == row_obj._id){
     value.centerName = row_obj.centerName;

   }
   return true;
 });
}

public detailsRowData (row_obj){

 this.datasource = this.datasource.filter((value,key)=>{
   if(value.centerName == row_obj.centerName){
     value.modeofOperation = row_obj.modeofOperation;

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

addHandicapped()
{
  if (this.handicapped==null){
    this.studentservice.getHandicapped()
    .subscribe((handicappedData)=>this.handicapped = handicappedData);
    console.log("here are the records !"+this.handicapped  );
   this.handicapped1= this.handicapped
  }
  else{
    this.handicapped1=this.handicapped1;
  }
 
}
}
 
 