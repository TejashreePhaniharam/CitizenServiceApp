import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Colleges } from '../search-college/Colleges';

@Component({
  selector: 'app-search-dynamic',
  templateUrl: './search-dynamic.component.html',
  styleUrls: ['./search-dynamic.component.css'],
  providers:[StudentServiceService],
})
export class SearchDynamicComponent implements OnInit {
  colleges1:Colleges[];
  colleges:Colleges[];
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
     private studentservice:StudentServiceService){
      this.colleges1= this.colleges
   }
   
   ngOnInit(): void {
    this.studentservice.getColleges()
    .subscribe((collegeData)=>this.colleges = collegeData);
    console.log("here are the records !"+this.colleges  );
    this.colleges1= this.colleges
   }
 
   getCollegesByScores()
 {

     this.studentservice.getColleges()
     .subscribe((collegeData)=>this.colleges = collegeData);

 }
}
