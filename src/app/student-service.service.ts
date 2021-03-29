import {Injectable, Input} from '@angular/core';

import {Http, Response} from '@angular/http';
import {map, catchError, tap } from 'rxjs/operators';
import {Observable, throwError, of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { Colleges } from './search-college/Colleges';
import { Handicapped } from './display-organization/display-handicapped/Handicapped';
import { Seniorprogram } from './display-organization/display-seniorprogram/Seniorprogram';
import { Orphanage } from './display-organization/display-orphanage/Orphanage';
import { Voluntary } from './display-organization/display-voluntary/Voluntary';
import { Donationcenter } from './display-organization/display-donationcenter/Donationcenter';
import { Foodbank } from './display-organization/display-foodbank/Foodbank';
import { Rehabcenter } from './display-organization/display-rehabcenter/Rehabcenter';

@Injectable()
export class StudentServiceService {
  private collegesUrl = "http://localhost:8081/colleges";
  private handicappedUrl = "http://localhost:8081/handicapped";
  private seniorprogramUrl = "http://localhost:8081/seniorProgram";
  private orphanageUrl = "http://localhost:8081/orphanageProgram";
  private voluntaryUrl = "http://localhost:8081/voluntoryOrg";
  private donationcenterUrl = "http://localhost:8081/donationCenter";
  private foodbankUrl = "http://localhost:8081/foodBanks";
  private rehabcenterUrl = "http://localhost:8081/rehabCenter";
  private addCollegeUrl = "http://localhost:8081/";
  private updateCollegeUrl = "http://localhost:8081/";
  private deleteCollegeUrl = "http://localhost:8081/";
  private addSeniorprogramUrl = "http://localhost:8081/";
  private addHandicappedUrl = "http://localhost:8081/";
  private addOrphanageUrl = "http://localhost:8081/";
  private addVoluntaryUrl = "http://localhost:8081/";
  private addDonationcenterUrl = "http://localhost:8081/";
  private addFoodbankUrl = "http://localhost:8081/";
  private addRehabcenterUrl = "http://localhost:8081/";
  private updateSeniorprogramUrl = "http://localhost:8081/";
  private updateOrphanageUrl = "http://localhost:8081/";
  private updateHandicappedUrl = "http://localhost:8081/";
  private updateVoluntaryUrl = "http://localhost:8081/";
  private updateDonationcenterUrl = "http://localhost:8081/";
  private updateFoodbankUrl = "http://localhost:8081/";
  private updateRehabcenterUrl = "http://localhost:8081/";
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
   seniorprogram: Seniorprogram[];
   orphanage: Orphanage[];
   voluntary: Voluntary[];
   donationcenter: Donationcenter[];
   foodbank: Foodbank[];
   rehabcenter: Rehabcenter[];
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

    public getSeniorprogram(): Observable<Seniorprogram[]>{

      return this._http.get(this.seniorprogramUrl)
                       .pipe(
                         map(seniorprog => this.seniorprogram = seniorprog.json()
                       ),
                       catchError(this.handleError('getCertifications',[]))
                       );
      
      }

      public getOrphanage(): Observable<Orphanage[]>{

        return this._http.get(this.orphanageUrl)
                         .pipe(
                           map(orphans => this.orphanage = orphans.json()
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

      public getVoluntary(): Observable<Voluntary[]>{

        return this._http.get(this.voluntaryUrl)
                         .pipe(
                           map(volun => this.voluntary = volun.json()
                         ),
                         catchError(this.handleError('getCertifications',[]))
                         );
        
        }

        public getDonationcenter(): Observable<Donationcenter[]>{

          return this._http.get(this.donationcenterUrl)
                           .pipe(
                             map(doncenter => this.donationcenter = doncenter.json()
                           ),
                           catchError(this.handleError('getCertifications',[]))
                           );
          
          }

          public getFoodbank(): Observable<Foodbank[]>{

            return this._http.get(this.foodbankUrl)
                             .pipe(
                               map(foodbnk => this.foodbank = foodbnk.json()
                             ),
                             catchError(this.handleError('getCertifications',[]))
                             );
            
            }

            public getRehabcenter(): Observable<Rehabcenter[]>{

              return this._http.get(this.rehabcenterUrl)
                               .pipe(
                                 map(rehabs => this.rehabcenter = rehabs.json()
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

    public createSeniorprogram(seniorprog:Seniorprogram): Observable<Seniorprogram> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addSeniorprogramUrl, seniorprog, options)
                        .pipe(
                        map(seniorprogramData => this.seniorprogram = seniorprogramData.json()
                      ),                     
                      catchError(this.handleError('seniorprogram',[]))
                      );
    }

    public createOrphanage(orphans:Orphanage): Observable<Orphanage> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addOrphanageUrl, orphans, options)
                        .pipe(
                        map(orphanageData => this.orphanage = orphanageData.json()
                      ),                     
                      catchError(this.handleError('orphanage',[]))
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

    public createVoluntary(volun:Voluntary): Observable<Voluntary> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addVoluntaryUrl, volun, options)
                        .pipe(
                        map(voluntaryData => this.voluntary = voluntaryData.json()
                      ),                     
                      catchError(this.handleError('voluntary',[]))
                      );
    }

    public createDonationcenter(doncenter:Donationcenter): Observable<Donationcenter> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addDonationcenterUrl, doncenter, options)
                        .pipe(
                        map(donationcenterData => this.donationcenter = donationcenterData.json()
                      ),                     
                      catchError(this.handleError('donationcenter',[]))
                      );
    }

    public createFoodbank(foodbnk:Foodbank): Observable<Foodbank> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addFoodbankUrl, foodbnk, options)
                        .pipe(
                        map(foodbankData => this.foodbank = foodbankData.json()
                      ),                     
                      catchError(this.handleError('foodbank',[]))
                      );
    }

    public createRehabcenter(rehabs:Rehabcenter): Observable<Rehabcenter> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this.addRehabcenterUrl, rehabs, options)
                        .pipe(
                        map(rehabcenterData => this.rehabcenter = rehabcenterData.json()
                      ),                     
                      catchError(this.handleError('rehabcenter',[]))
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

    public updateSeniorProgram(seniorprog:Seniorprogram): Observable<Seniorprogram> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.put(this.updateSeniorprogramUrl, seniorprog, options)
                        .pipe(
                        map(seniorprogramData => this.seniorprogram = seniorprogramData.json()
                      ),                     
                      catchError(this.handleError('seniorprogram',[]))
                      );
                        }

     public updateOrphanage(orphans:Orphanage): Observable<Orphanage> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.put(this.updateOrphanageUrl, orphans, options)
                        .pipe(
                        map(orphanageData => this.orphanage = orphanageData.json()
                      ),                     
                      catchError(this.handleError('orphanage',[]))
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

    public updateVoluntary(volun:Voluntary): Observable<Voluntary> {
       let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.put(this.updateVoluntaryUrl, volun, options)
                        .pipe(
                       map(voluntaryData => this.voluntary = voluntaryData.json()
                       ),                     
                      catchError(this.handleError('voluntary',[]))
                      );
                       }

                       public updateDonationcenter(doncenter:Donationcenter): Observable<Donationcenter> {
                        let headers = new Headers({ 'Content-Type': 'application/json' });
                             let options = new RequestOptions({ headers: headers });
                             return this._http.put(this.updateDonationcenterUrl, doncenter, options)
                                         .pipe(
                                        map(donationcenterData => this.donationcenter = donationcenterData.json()
                                        ),                     
                                       catchError(this.handleError('donationcenter',[]))
                                       );
                                        }     
                                        
                                        public updateFoodbank(foodbnk:Foodbank): Observable<Foodbank> {
                                          let headers = new Headers({ 'Content-Type': 'application/json' });
                                               let options = new RequestOptions({ headers: headers });
                                               return this._http.put(this.updateFoodbankUrl, foodbnk, options)
                                                           .pipe(
                                                          map(foodbankData => this.foodbank = foodbankData.json()
                                                          ),                     
                                                         catchError(this.handleError('foodbank',[]))
                                                         );
                                                          } 


                                                          public updateRehabcenter(rehabs:Rehabcenter): Observable<Rehabcenter> {
                                                            let headers = new Headers({ 'Content-Type': 'application/json' });
                                                                 let options = new RequestOptions({ headers: headers });
                                                                 return this._http.put(this.updateRehabcenterUrl, rehabs, options)
                                                                             .pipe(
                                                                            map(rehabcenterData => this.rehabcenter = rehabcenterData.json()
                                                                            ),                     
                                                                           catchError(this.handleError('rehabcenter',[]))
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