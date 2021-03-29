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
import { Orphanage } from './Orphanage';


@Component({
  selector: 'app-display-orphanage',
  templateUrl: './display-orphanage.component.html',
  styleUrls: ['./display-orphanage.component.css'],
  providers: [StudentServiceService]
})
export class DisplayOrphanageComponent implements OnInit {
  orphanage1:Orphanage[];
  orphanage:Orphanage[];
 
  datasource;
   tableColumns  :  string[] = ['centerName','websiteUrl','gender', 'agecriterion', 'modeofOperation', 'description', 'action'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
orphans = new Orphanage();
_id: string;
centerName: string;
centerType: string;
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
state: string;
countryName: string;
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
    this.studentservice.getOrphanage().subscribe(data => {
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
 this.orphans.centerName=row_obj.centerName,
 this.orphans.agecriterion=row_obj.agecriterion
 this.orphans.gender=row_obj.gender,
 this.orphans.modeofOperation=row_obj.modeofOperation,
 this.orphans.description=row_obj.description,



 this.studentservice.createOrphanage(this.orphans)
 .subscribe((certificationData)=>this.orphans = certificationData)
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

addOrphanage()
{
  if (this.orphanage==null){
    this.studentservice.getOrphanage()
    .subscribe((orphanageData)=>this.orphanage = orphanageData);
    console.log("here are the records !"+this.orphanage  );
   this.orphanage1= this.orphanage
  }
  else{
    this.orphanage1=this.orphanage1;
  }
 
}

}
