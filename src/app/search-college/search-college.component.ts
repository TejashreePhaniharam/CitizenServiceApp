import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Colleges} from '../search-college/Colleges';

@Component({
  selector: 'app-search-college',
  templateUrl: './search-college.component.html',
  styleUrls: ['./search-college.component.css'],
  providers:[StudentServiceService],
})
export class SearchCollegeComponent implements OnInit {
 colleges1:Colleges[];
 colleges:Colleges[];
  constructor(private route:ActivatedRoute,
    private studentservice:StudentServiceService){
  }
  ngOnInit(): void {
   
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
