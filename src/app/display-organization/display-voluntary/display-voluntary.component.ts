import { Component, OnInit } from '@angular/core';
import { Voluntary } from './Voluntary';
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

@Component({
  selector: 'app-display-voluntary',
  templateUrl: './display-voluntary.component.html',
  styleUrls: ['./display-voluntary.component.css'],
  providers: [StudentServiceService]
})
export class DisplayVoluntaryComponent implements OnInit {
  voluntary1:Voluntary[];
  voluntary:Voluntary[];
 
  datasource;
   tableColumns  :  string[] = ['category','subcategory','phone','websiteUrl', 'yearEstablished', 'description', 'action'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
volun = new Voluntary();
_id: string;
category: string;
subcategory: string;
phone: string;
contactPerson: string;
email: string;
websiteurl: string;
volunteersSize: string;
yearEstablished: string;
state: string;
countryName: string
description: string;
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
    this.studentservice.getVoluntary().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      if (this.sort) // check it is defined.
      {
          this.datasource.sort = this.sort;
          this.datasource.paginator = this.paginator;
      }
    });
  }
  public addRowData(row_obj) {
    console.log(" category "+row_obj.category)
    console.log(" subcategory "+row_obj.subcategory)
    console.log(" description "+row_obj.description)
 this.volun.category=row_obj.category,
 this.volun.subcategory=row_obj.subcategory
 this.volun.description=row_obj.description,



 this.studentservice.createVoluntary(this.volun)
 .subscribe((certificationData)=>this.volun = certificationData)
 this.table.renderRows();
}

public updateRowData (row_obj){

 this.datasource = this.datasource.filter((value,key)=>{
   if(value._id == row_obj._id){
     value.category = row_obj.category;

   }
   return true;
 });
}

public detailsRowData (row_obj){

 this.datasource = this.datasource.filter((value,key)=>{
   if(value.category == row_obj.category){
     value.subcategory = row_obj.subcategory;

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

addVoluntary()
{
  if (this.voluntary==null){
    this.studentservice.getVoluntary()
    .subscribe((VoluntaryData)=>this.voluntary = VoluntaryData);
    console.log("here are the records !"+this.voluntary  );
   this.voluntary1= this.voluntary
  }
  else{
    this.voluntary1=this.voluntary1;
  }
 
}

}
