import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { IProjectEmployee, IProject } from '../../model/interface/master';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Employee } from '../../model/class/Employee';

@Component({
  selector: 'app-project-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule here
  templateUrl: './project-employee.component.html',
  styleUrls: ['./project-employee.component.css'],
})
export class ProjectEmployeeComponent implements OnInit {
  projectEmployeeForm: FormGroup;
  projectEmployeeList: IProjectEmployee[] = [];
  projectList$: Observable<IProject[]>;
  empList$: Observable<Employee[]>;

  constructor(private fb: FormBuilder, private masterService: MasterService) {
    this.projectEmployeeForm = this.fb.group({
      empProjectId: [null], // Add empProjectId to the form
      projectId: ['', Validators.required],
      empId: ['', Validators.required],
      assignedDate: ['', Validators.required],
      role: ['', Validators.required],
      isActive: [false],
    });

    this.projectList$ = this.masterService.getAllProjects();
    this.empList$ = this.masterService.getAllEmp();
  }

  ngOnInit(): void {
    this.getProjectEmployees();
  }

  getProjectEmployees() {
    this.masterService.getProjectEmp().subscribe((res: IProjectEmployee[]) => {
      this.projectEmployeeList = res;
    });
  }

  onEdit(projectEmployee: IProjectEmployee) {
    this.projectEmployeeForm.patchValue(projectEmployee);
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.masterService.deleteProjectEmpById(id).subscribe(
        () => {
          this.projectEmployeeList = this.projectEmployeeList.filter(
            (emp) => emp.empProjectId !== id
          );
          alert('Project Employee Deleted');
        },
        (error: any) => {
          alert('API Error');
        }
      );
    }
  }

  onSave() {
    if (this.projectEmployeeForm.valid) {
      const projectEmployee = this.projectEmployeeForm.value;
      if (projectEmployee.empProjectId) {
        // Update existing project employee
        this.masterService.updateProjectEmp(projectEmployee).subscribe(
          () => {
            this.getProjectEmployees();
            this.projectEmployeeForm.reset();
            alert('Project Employee Updated');
          },
          (error: any) => {
            alert('API Error');
          }
        );
      } else {
        // Create new project employee
        this.masterService.saveProjectEmp(projectEmployee).subscribe(
          () => {
            this.getProjectEmployees();
            this.projectEmployeeForm.reset();
            alert('Project Employee Saved');
          },
          (error: any) => {
            alert('API Error');
          }
        );
      }
    }
  }
}
