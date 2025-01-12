import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IApiResponse,
  IProject,
  IProjectEmployee,
} from '../model/interface/master';
import { Employee } from '../model/class/Employee';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  // Use your own CORS proxy
  corsProxyUrl: string = 'https://cors-proxy-avym.onrender.com/';
  apiUrl: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http: HttpClient) {}

  getAllDept(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      this.corsProxyUrl + this.apiUrl + 'GetParentDepartment'
    );
  }

  getChildDeptById(deptid: number): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${
        this.corsProxyUrl + this.apiUrl
      }GetChildDepartmentByParentId?deptId=${deptid}`
    );
  }

  saveEmp(obj: Employee): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      this.corsProxyUrl + this.apiUrl + 'CreateEmployee',
      obj
    );
  }

  getAllEmp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      this.corsProxyUrl + this.apiUrl + 'GetAllEmployees'
    );
  }

  updateEmp(obj: Employee): Observable<IApiResponse> {
    return this.http.put<IApiResponse>(
      this.corsProxyUrl + this.apiUrl + 'UpdateEmployee/' + obj.employeeId,
      obj
    );
  }

  deleteEmpById(id: number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(
      this.corsProxyUrl + this.apiUrl + 'DeleteEmployee/' + id
    );
  }

  saveProject(obj: Employee): Observable<IProject> {
    return this.http.post<IProject>(
      this.corsProxyUrl + this.apiUrl + 'CreateProject',
      obj
    );
  }

  updateProject(obj: IProject): Observable<IProject> {
    return this.http.put<IProject>(
      this.corsProxyUrl + this.apiUrl + 'UpdateProject/' + obj.projectId,
      obj
    );
  }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(
      this.corsProxyUrl + this.apiUrl + 'GetAllProjects'
    );
  }

  getProjectById(id: number): Observable<IProject> {
    return this.http.get<IProject>(
      this.corsProxyUrl + this.apiUrl + 'GetProject/' + id
    );
  }

  getProjectEmp(): Observable<IProjectEmployee[]> {
    return this.http.get<IProjectEmployee[]>(
      this.corsProxyUrl + this.apiUrl + 'GetAllProjectEmployees'
    );
  }

  saveProjectEmp(obj: IProjectEmployee): Observable<IProject> {
    return this.http.post<IProject>(
      this.corsProxyUrl + this.apiUrl + 'CreateProjectEmployee',
      obj
    );
  }

  updateProjectEmp(obj: IProjectEmployee): Observable<IProjectEmployee> {
    return this.http.put<IProjectEmployee>(
      this.corsProxyUrl +
        this.apiUrl +
        'UpdateProjectEmployee/' +
        obj.empProjectId,
      obj
    );
  }

  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.corsProxyUrl + this.apiUrl + 'GetDashboard');
  }
}
