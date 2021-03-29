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
import { Foodbank } from './Foodbank';

@Component({
  selector: 'app-display-foodbank',
  templateUrl: './display-foodbank.component.html',
  styleUrls: ['./display-foodbank.component.css'],
  providers: [StudentServiceService],
})
export class DisplayFoodbankComponent implements OnInit {
  foodbank1:Foodbank[];
  foodbank:Foodbank[];
 
  datasource;
   tableColumns  :  string[] = ['centerName','services','contactPerson', 'websiteUrl', 'state', 'description', 'action'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
foodbnk = new Foodbank();
  _id: string;
  centerId: string;
centerName: string;
centerType: string;
services: string;
contactPerson: string;
email: string;
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
    this.studentservice.getFoodbank().subscribe(data => {
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
    console.log(" description "+row_obj.description)
 this.foodbnk.centerName=row_obj.centerName,
 this.foodbnk.description=row_obj.description,



 this.studentservice.createFoodbank(this.foodbnk)
 .subscribe((certificationData)=>this.foodbnk = certificationData)
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

addFoodbank()
{
  if (this.foodbank==null){
    this.studentservice.getFoodbank()
    .subscribe((foodbankData)=>this.foodbank = foodbankData);
    console.log("here are the records !"+this.foodbank  );
   this.foodbank1= this.foodbank
  }
  else{
    this.foodbank1=this.foodbank1;
  }
 
}
}
