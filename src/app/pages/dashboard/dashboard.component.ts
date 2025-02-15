import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardData: any = {
    totalEmployee: 0,
    totalProject: 0,
    activeProjectEmployees: 0,
    recentProjects: [],
    recentEmployee: [],
  };

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData() {
    this.masterService.getDashboardData().subscribe((data: any) => {
      this.dashboardData = data;
    });
  }
}
