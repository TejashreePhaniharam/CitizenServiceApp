import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AddDailogComponent } from '../add-dailog/add-dailog.component';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css'],
  providers:[StudentServiceService],
})
export class AddOrganizationComponent implements OnInit {
  datasource: any;
  sort: any;
  paginator: any;
  college: any;
  collegeUrl: any;
  table: any;

  constructor(private route:ActivatedRoute,
    private studentservice:StudentServiceService, public dialog: MatDialog){

  }
  ngOnInit(): void {
   
  }
  public doFilter = (value: string) => {
    this.datasource.filter = value.trim().toLocaleLowerCase();
  }

  openDialog(action,obj): void {
    obj.action = action;

    const dialogRef = this.dialog.open(AddDailogComponent, {
      width: '5000',
      data:obj
      
      // data: { 
      //   categoryName: this.categoryName,collegeScores: this.collegeScores, collegeUrl: this.collegeUrl, collegeScholarships: this.collegeScholarships, countryName: this.countryName }
    
    
    });

    dialogRef.afterClosed().subscribe(result => {


      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        console.log("came here")
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }else if(result.event == 'Details'){
        this.detailsRowData(result.data);
      }


    });
  }
  updateRowData(data: any) {
    throw new Error('Method not implemented.');
  }
  deleteRowData(data: any) {
    throw new Error('Method not implemented.');
  }
  detailsRowData(data: any) {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void
  {
    this.studentservice.getColleges().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      if (this.sort) // check it is defined.
      {
          this.datasource.sort = this.sort;
          this.datasource.paginator = this.paginator;
      }
    });
  }

  public addRowData(row_obj) {
       console.log(" categoryName "+row_obj.categoryName)
       console.log(" collegeScores "+row_obj.collegeScores)
       console.log(" collegeUrl "+row_obj.collegeUrl)
       console.log(" countryName "+row_obj.countryName)
       console.log(" collegeScholarships "+row_obj.collegeScholarships)
    this.college.categoryName=row_obj.categoryName,
    this.college.collegeScores=row_obj.collegeScores
    this.collegeUrl=row_obj.collegeUrl,
    this.college.countryName=row_obj.countryName,
    this.college.collegeScholarships=row_obj.collegeScholarships,



    this.studentservice.createCollege(this.college)
    .subscribe((certificationData)=>this.college = certificationData)
    this.table.renderRows();
  }
 

}
