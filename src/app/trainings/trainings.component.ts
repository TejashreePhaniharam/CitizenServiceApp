import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
//import { Component, OnInit } from '@angular/core';
import { Colleges } from '../search-college/Colleges';
//import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute } from '@angular/router';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
  providers:[StudentServiceService],
})
export class TrainingsComponent implements OnInit {

  constructor(public sanitizer:DomSanitizer,private route:ActivatedRoute,
    private studentservice:StudentServiceService){
  }

  ngOnInit(): void {
  }

}
