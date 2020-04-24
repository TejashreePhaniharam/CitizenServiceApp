import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Colleges} from '../search-college/Colleges';
import { Injectable, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable } from '@angular/material/table';

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
  tableColumns  :  string[] = ['categoryName','collegeScores','collegeUrl', 'collegeScholarships', 'countryName', 'notes', 'details', 'update', 'add'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;


  constructor(private route:ActivatedRoute,
    private studentservice:StudentServiceService){
  }
  ngOnInit(): void {
   
  }
  public doFilter = (value: string) => {
    this.datasource.filter = value.trim().toLocaleLowerCase();
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

  public redirectToDetails = (id: string) => {
    
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToAdd = (id: string) => {
    
  }
  public pageChanged = (id: string) => {
    
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
