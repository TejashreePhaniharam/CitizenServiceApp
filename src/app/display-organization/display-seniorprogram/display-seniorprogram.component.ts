import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/student-service.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable } from '@angular/material/table';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDailogComponent } from '../../add-dailog/add-dailog.component';
import { Seniorprogram } from './Seniorprogram';

@Component({
  selector: 'app-display-seniorprogram',
  templateUrl: './display-seniorprogram.component.html',
  styleUrls: ['./display-seniorprogram.component.css'],
  providers: [StudentServiceService],
})
export class DisplaySeniorprogramComponent implements OnInit {
  seniorprogram1:Seniorprogram[];
  seniorprogram:Seniorprogram[];

  datasource;
   tableColumns  :  string[] = ['centerName','websiteUrl','gender', 'agecriterion', 'modeofOperation', 'description', 'action'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatTable,{static:true}) table: MatTable<any>;

   seniorprog = new Seniorprogram();
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
   maleSeniorstrength: string;
   femaleStrength: string;
   totalStrength: string;
   staffSize: string;
   description: string;
   countryName: string;
   state: string;

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
      this.studentservice.getSeniorprogram().subscribe(data => {
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
   this.seniorprog.centerName=row_obj.centerName,
   this.seniorprog.agecriterion=row_obj.agecriterion
   this.seniorprog.gender=row_obj.gender,
   this.seniorprog.modeofOperation=row_obj.modeofOperation,
   this.seniorprog.description=row_obj.description,
  
  
  
   this.studentservice.createSeniorprogram(this.seniorprog)
   .subscribe((certificationData)=>this.seniorprog = certificationData)
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
  
  addSeniorprogram()
  {
    if (this.seniorprogram==null){
      this.studentservice.getSeniorprogram()
      .subscribe((seniorprogramData)=>this.seniorprogram = seniorprogramData);
      console.log("here are the records !"+this.seniorprogram  );
     this.seniorprogram1= this.seniorprogram
    }
    else{
      this.seniorprogram1=this.seniorprogram1;
    }
   
  }
  }
   
   
