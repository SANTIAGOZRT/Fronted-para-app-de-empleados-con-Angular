import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { Employee } from '../../model/class/Employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule here
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeList: Employee[] = [];

  constructor(private fb: FormBuilder, private masterService: MasterService) {
    this.employeeForm = this.fb.group({
      employeeId: [null], // Add employeeId to the form
      employeeName: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.masterService.getAllEmp().subscribe((res: Employee[]) => {
      console.log(res); // Log the response to verify the data
      this.employeeList = res;
    });
  }

  onEdit(employee: Employee) {
    this.employeeForm.patchValue(employee);
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.masterService.deleteEmpById(id).subscribe(
        () => {
          this.employeeList = this.employeeList.filter(
            (emp) => emp.employeeId !== id
          );
          alert('Employee Deleted');
        },
        (error) => {
          alert('API Error');
        }
      );
    }
  }

  onSave() {
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      if (employee.employeeId) {
        // Update existing employee
        this.masterService.updateEmp(employee).subscribe(
          () => {
            this.getEmployees();
            this.employeeForm.reset();
            alert('Employee Updated');
          },
          (error) => {
            alert('API Error');
          }
        );
      } else {
        // Create new employee
        this.masterService.saveEmp(employee).subscribe(
          () => {
            this.getEmployees();
            this.employeeForm.reset();
            alert('Employee Saved');
          },
          (error) => {
            alert('API Error');
          }
        );
      }
    }
  }
}
