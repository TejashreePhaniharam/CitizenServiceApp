import { Component, OnInit } from '@angular/core';
import { Colleges } from '../search-college/Colleges';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute } from '@angular/router';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-search-ratio',
  templateUrl: './search-ratio.component.html',
  styleUrls: ['./search-ratio.component.css'],
  providers:[StudentServiceService],
})
export class SearchRatioComponent implements OnInit {
  colleges1:Colleges[];
  colleges:Colleges[];
  DataOne1=[];
  collegeVideos: Colleges[];
  countryName: string;

   constructor(public sanitizer:DomSanitizer,private route:ActivatedRoute,
     private studentservice:StudentServiceService){
   }
   
   ngOnInit(): void {
     this.getByCountryNameResourceType("India","video");
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
 getByCountryNameResourceType(countryName:string,resourceType:string):void{

  if (!Array.isArray(this.collegeVideos)){
    console.log("came here"+countryName);
   this.studentservice.getByCountryNameResourceType(countryName,resourceType)
   .subscribe((collegedata)=>this.collegeVideos = collegedata);
  }
     
 }
}

