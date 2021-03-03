import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from "@angular/material/dialog";
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

interface DialogData {
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
}
@Component({
  selector: 'app-add-dailog',
  templateUrl: './add-dailog.component.html',
  styleUrls: ['./add-dailog.component.css']
})


export class AddDailogComponent implements OnInit {
  action:string;
  local_data:any;
  form: FormGroup;
  

  constructor(public sanitizer:DomSanitizer,
    public dialogRef: MatDialogRef<AddDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log("whats up"+data);
      this.local_data = {...data};
      this.action = this.local_data.action;

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

doAction(){
  this.dialogRef.close({event:this.action,data:this.local_data});
}

closeDialog(){
  this.dialogRef.close({event:'Cancel'});
}
}
