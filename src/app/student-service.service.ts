import {Injectable, Input} from '@angular/core';

import {Http, Response} from '@angular/http';
import {map, catchError, tap } from 'rxjs/operators';
import {Observable, throwError, of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { Colleges } from './search-college/Colleges';
import { Handicapped } from './display-organization/display-handicapped/Handicapped';

@Injectable()
export class StudentServiceService {
  private collegesUrl = "http://localhost:8081/colleges";
  private handicappedUrl = "http://localhost:8081/handicapped";
  private addCollegeUrl = "http://localhost:8081/";
  private updateCollegeUrl = "http://localhost:8081/";
  private deleteCollegeUrl = "http://localhost:8081/";
  private addHandicappedUrl = "http://localhost:8081/";
  private updateHandicappedUrl = "http://localhost:8081/";
  private deleteHandicappedUrl = "http://localhost:8081/";
  private countryNameCollegeScoresUrl = "http://localhost:8081/colleges/scores";
  private countryNameCollegeScholarshipsUrl = "http://localhost:8081/colleges/funding";
  private countryNameCollegeStandingUrl = "http://localhost:8081/colleges/standing";
  private countryNameCollegeCampusLifeUrl = "http://localhost:8081/colleges/campuslife";
  private countryNameCollegeNameUrl = "http://localhost:8081/colleges/clgname";
  private countryNameCollegeGPAUrl = "http://localhost:8081/colleges/gpa";
  private countryNameresorceTypeUrl = "http://localhost:8081/colleges/resources";
   colleges: Colleges[];
   handicapped: Handicapped[];
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
    public getHandicapped(): Observable<Handicapped[]>{

      return this._http.get(this.handicappedUrl)
                       .pipe(
                         map(handicapps => this.handicapped = handicapps.json()
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
    public createHandicapped(handicapps:Handicapped): Observable<Handicapped> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addHandicappedUrl, handicapps, options)
                        .pipe(
                        map(handicappedData => this.handicapped = handicappedData.json()
                      ),                     
                      catchError(this.handleError('handicapped',[]))
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
    public updateHandicapped(handicapps:Handicapped): Observable<Handicapped> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.put(this.updateHandicappedUrl, handicapps, options)
                        .pipe(
                        map(handicappedData => this.handicapped = handicappedData.json()
                      ),                     
                      catchError(this.handleError('handicapped',[]))
                      );
                        }
    public getByCountryNameCollegeScores(countryName:string, collegeScores:Number): Observable<Colleges[]>{

      var collgescores = this.countryNameCollegeScoresUrl + "/"+ countryName + "/" + collegeScores;

      return this._http.get(collgescores)
                       .pipe(
                         map(college => this.colleges = college.json()
                       ),
                       catchError(this.handleError('getCertifications',[]))
                       );
      
      }

      public getByCountryNameCollegeScholarships(countryName:string, collegeScholarships:string): Observable<Colleges[]>{

        var collgescholarships = this.countryNameCollegeScholarshipsUrl + "/"+ countryName + "/" + collegeScholarships;
  
        return this._http.get(collgescholarships)
                         .pipe(
                           map(college => this.colleges = college.json()
                         ),
                         catchError(this.handleError('getCertifications',[]))
                         );
        
        }


        public getByCountryNameCollegeStanding(countryName:string, collegeStanding:string): Observable<Colleges[]>{

          var collgestanding = this.countryNameCollegeStandingUrl + "/"+ countryName + "/" + collegeStanding;
    
          return this._http.get(collgestanding)
                           .pipe(
                             map(college => this.colleges = college.json()
                           ),
                           catchError(this.handleError('getCertifications',[]))
                           );
          
          }

          public getByCountryNameCollegeCampusLife(countryName:string, collegeCampusLife:string): Observable<Colleges[]>{
            console.log("country"+countryName)
            console.log("campusLife"+collegeCampusLife)
            var collgesCampusLife = this.countryNameCollegeCampusLifeUrl + "/"+ countryName + "/" + collegeCampusLife;
            console.log("campusLife"+collgesCampusLife)
            return this._http.get(collgesCampusLife)
                             .pipe(
                               map(college => this.colleges = college.json()
                             ),
                             catchError(this.handleError('getCertifications',[]))
                             );
            
            }

            public getByCountryNameCollegeName(countryName:string, collegeName:string): Observable<Colleges[]>{

              var collgesName = this.countryNameCollegeNameUrl + "/"+ countryName + "/" + collegeName;
        
              return this._http.get(collgesName)
                               .pipe(
                                 map(college => this.colleges = college.json()
                               ),
                               catchError(this.handleError('getCertifications',[]))
                               );
              
              }

              public getByCountryNameCollegeGPA(countryName:string, collegeGPA:string): Observable<Colleges[]>{

                var collgesGPA = this.countryNameCollegeGPAUrl + "/"+ countryName + "/" + collegeGPA;
          
                return this._http.get(collgesGPA)
                                 .pipe(
                                   map(college => this.colleges = college.json()
                                 ),
                                 catchError(this.handleError('getCertifications',[]))
                                 );
                
                }


                getByCountryNameResourceType(countryName:string,resourceType:string): Observable<Colleges[]>{   
                  var resourceTypeUrl=this.countryNameresorceTypeUrl+ "/"  + countryName +  "/" + resourceType;
                  console.log("came here"+resourceTypeUrl);
            
                  return this._http.get(resourceTypeUrl)
                  .pipe(
                    map(college => this.colleges = college.json()
                    ),
                  catchError(this.handleError('popularityStories',[]))
                  );
            
                } 
            



    private handleError<T>(operation = 'operation', result?:T){
      return (error:any): Observable<T> =>{
        return of(result as T);
      };
    }

  }