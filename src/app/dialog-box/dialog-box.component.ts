import { Component, Inject, Optional } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from "@angular/material/dialog";
export interface UsersData {
  email: string;
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
}
 
 
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
 
  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log("whats up"+data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
 
}