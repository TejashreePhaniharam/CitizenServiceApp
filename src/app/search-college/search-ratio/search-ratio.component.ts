import { Component, OnInit } from '@angular/core';
import { Colleges } from '../search-college/Colleges';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-ratio',
  templateUrl: './search-ratio.component.html',
  styleUrls: ['./search-ratio.component.css'],
  providers:[StudentServiceService],
})
export class SearchRatioComponent implements OnInit {
  colleges1:Colleges[];
  colleges:Colleges[];
   constructor(private route:ActivatedRoute,
     private studentservice:StudentServiceService){
   }
   ngOnInit(): void {
    
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
}
