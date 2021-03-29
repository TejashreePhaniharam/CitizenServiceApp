import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/student-service.service';
import { Rehabcenter } from './Rehabcenter';
import { ActivatedRoute } from '@angular/router';
import { Injectable, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable } from '@angular/material/table';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDailogComponent } from '../../add-dailog/add-dailog.component';

@Component({
  selector: 'app-display-rehabcenter',
  templateUrl: './display-rehabcenter.component.html',
  styleUrls: ['./display-rehabcenter.component.css'],
  providers: [StudentServiceService],
})
export class DisplayRehabcenterComponent implements OnInit {
  rehabcenter1:Rehabcenter[];
  rehabcenter:Rehabcenter[];
 
  datasource;
   tableColumns  :  string[] = ['centerName','speciality','gender', 'websiteUrl', 'modeofOperation', 'description', 'action'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
rehabs = new Rehabcenter();
_id: string;
centerId: string;
centerName: string;
speciality: string;
gender: string;
modeofOperation: string;
contactPerson: string;
websiteUrl: string;
description: string;
state: string;
countryName: string
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
    this.studentservice.getRehabcenter().subscribe(data => {
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
    console.log(" modeofOperation "+row_obj.modeofOperation)
    console.log(" description "+row_obj.description)
 this.rehabs.centerName=row_obj.centerName,
 this.rehabs.modeofOperation=row_obj.modeofOperation,
 this.rehabs.description=row_obj.description,



 this.studentservice.createRehabcenter(this.rehabs)
 .subscribe((certificationData)=>this.rehabs = certificationData)
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

addRehabcenter()
{
  if (this.rehabcenter==null){
    this.studentservice.getRehabcenter()
    .subscribe((rehabcenterData)=>this.rehabcenter = rehabcenterData);
    console.log("here are the records !"+this.rehabcenter  );
   this.rehabcenter1= this.rehabcenter
  }
  else{
    this.rehabcenter1=this.rehabcenter1;
  }
 
}

}
