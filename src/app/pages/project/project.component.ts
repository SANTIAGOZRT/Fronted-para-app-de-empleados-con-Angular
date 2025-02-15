import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IProject } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink, DatePipe, CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'], // Corrected from styleUrl to styleUrls
})
export class ProjectComponent implements OnInit {
  projectList: IProject[] = [];
  masterSrv = inject(MasterService);
  router = inject(Router);

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.masterSrv.getAllProjects().subscribe((Res: IProject[]) => {
      this.projectList = Res;
    });
  }

  onEdit(id: number) {
    this.router.navigate(['new-project', id]);
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.masterSrv.deleteProjectById(id).subscribe(
        (res: any) => {
          const index = this.projectList.findIndex(
            (project: IProject) => project.projectId === id
          );
          this.projectList.splice(index, 1);
          alert('Project Deleted');
        },
        (error) => {
          alert('API Error');
        }
      );
    }
  }
}
