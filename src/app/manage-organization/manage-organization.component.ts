import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-manage-organization',
  templateUrl: './manage-organization.component.html',
  styleUrls: ['./manage-organization.component.css'],
  providers: [StudentServiceService]
})
export class ManageOrganizationComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}
/* Set the width of the side navigation to 250px */
