//import { Injectable } from '@angular/core';
import {Injectable, Input} from '@angular/core';

import {Http, Response} from '@angular/http';
import {map, catchError, tap } from 'rxjs/operators';
import {Observable, throwError, of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { Colleges } from './search-college/Colleges';

@Injectable()
export class StudentServiceService {
  private collegesUrl = "http://localhost:8081/colleges";
  private addCollegeUrl = "http://localhost:8081/";
  private updateCollegeUrl = "http://localhost:8081/";
  private deleteCollegeUrl = "http://localhost:8081/";
  private countryNameCollegeScoresUrl = "http://localhost:8081/colleges/scores";
   colleges: Colleges[];
  constructor(private _http:Http) {
  
  }
    public getColleges(): Observable<Colleges[]>{

    return this._http.get(this.collegesUrl)
                     .pipe(
                       map(college => this.colleges = college.json()
                     ),
                     catchError(this.handleError('getCertifications',[]))
                     );
    
    }

    public createCollege(college:Colleges): Observable<Colleges> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addCollegeUrl, college, options)
                        .pipe(
                        map(collegeData => this.colleges = collegeData.json()
                      ),                     
                      catchError(this.handleError('colleges',[]))
                      );
    }

    public updateCollege(college:Colleges): Observable<Colleges> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.put(this.updateCollegeUrl, college, options)
                        .pipe(
                        map(collegeData => this.colleges = collegeData.json()
                      ),                     
                      catchError(this.handleError('colleges',[]))
                      );
    }
    public getByCountryNameCollegeScores(countryName:string, collegeScores:Number): Observable<Colleges[]>{
      console.log("actual service call :  "+countryName);
      console.log("hello babu:  "+collegeScores);
      var sam = this.countryNameCollegeScoresUrl + "/"+ countryName + "/" + collegeScores;
      console.log("actaul url:  "+sam);
      console.log("in service call of cntry and scores"+this.countryNameCollegeScoresUrl)
      return this._http.get(this.countryNameCollegeScoresUrl)
                       .pipe(
                         map(college => this.colleges = college.json()
                       ),
                       catchError(this.handleError('getCertifications',[]))
                       );
      
      }


    private handleError<T>(operation = 'operation', result?:T){
      return (error:any): Observable<T> =>{
        return of(result as T);
      };
    }

  }

