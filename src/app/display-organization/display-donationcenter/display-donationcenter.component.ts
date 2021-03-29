import { Component, OnInit } from '@angular/core';
import { Donationcenter } from './Donationcenter';
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
  selector: 'app-display-donationcenter',
  templateUrl: './display-donationcenter.component.html',
  styleUrls: ['./display-donationcenter.component.css'],
  providers: [StudentServiceService],
})
export class DisplayDonationcenterComponent implements OnInit {
  donationcenter1:Donationcenter[];
  donationcenter:Donationcenter[];
 
  datasource;
   tableColumns  :  string[] = ['centerName','donationType','contactPerson', 'websiteUrl', 'state', 'description', 'action'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
doncenter = new Donationcenter();
_id: string;
centerId: string;
centerName: string;
donationType: string;
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
    this.studentservice.getDonationcenter().subscribe(data => {
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
 this.doncenter.centerName=row_obj.centerName,
 this.doncenter.description=row_obj.description,



 this.studentservice.createDonationcenter(this.doncenter)
 .subscribe((certificationData)=>this.doncenter = certificationData)
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

addDonationcenter()
{
  if (this.donationcenter==null){
    this.studentservice.getDonationcenter()
    .subscribe((donationcenterData)=>this.donationcenter = donationcenterData);
    console.log("here are the records !"+this.donationcenter  );
   this.donationcenter1= this.donationcenter
  }
  else{
    this.donationcenter1=this.donationcenter1;
  }
 
}
}
