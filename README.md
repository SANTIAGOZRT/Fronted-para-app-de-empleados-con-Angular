## Employee Management App (Angular v18)

<img width="513" alt="Screenshot 2025-01-12 at 16 24 10" src="https://github.com/user-attachments/assets/8654f8cf-2b7a-44b2-a70c-26c1afa8a884" /> <img width="1196" alt="Screenshot 2025-01-12 at 16 24 49" src="https://github.com/user-attachments/assets/6feaa915-16f5-46c8-b57f-40288202dadf" /> <img width="1208" alt="Screenshot 2025-01-12 at 16 25 32" src="https://github.com/user-attachments/assets/578e95bb-a5c5-4a72-a17b-2a955cc89d49" /> <img width="1212" alt="Screenshot 2025-01-12 at 16 26 12" src="https://github.com/user-attachments/assets/e514b14e-b07f-4a7f-9203-b2850c5e78c0" /> <img width="1216" alt="Screenshot 2025-01-12 at 16 26 27" src="https://github.com/user-attachments/assets/18ea56cb-ccc3-42a1-888d-88490c9feab0" /> <img width="1212" alt="Screenshot 2025-01-12 at 16 26 48" src="https://github.com/user-attachments/assets/3d5402d3-dc6f-47a4-8399-2f732f9e49b7" />

Employee Management App is a web application (CRUD API Operation) built using Angular 18. This application provides functionalities to manage employees and projects within an organization. It leverages the latest features of Angular 18, including standalone components and dependency injection using the `inject` function.

**Online Live:** https://employee-management-app-arnob.vercel.app/

**Backend CORS-Proxy-Server Source Code:** https://github.com/arnobt78/CORS-Proxy-Server-Employee-API

## Features

- **Employee Management**: Add, update, delete, and view employees.
- **Project Management**: Add, update, delete, and view projects.
- **Dashboard**: View summary statistics such as total employees, total projects, and recent activities.

## Angular 18 Features Used

- **Standalone Components**: Components are defined as standalone, allowing for more modular and reusable code.
- **Dependency Injection with `inject`**: Services are injected using the `inject` function, simplifying the dependency injection process.

*Please note that this project is intended for learning purposes and is currently a work in progress. As such, not all functionalities are fully operational, and occasional issues may arise, such as errors when fetching or deleting data due to API-related challenges.*

## Project Structure

```
employee_management_app_angular18-main/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.ts
│   │   │   ├── employee/
│   │   │   │   ├── employee.component.html
│   │   │   │   ├── employee.component.ts
│   │   │   ├── project-form/
│   │   │   │   ├── project-form.component.html
│   │   │   │   ├── project-form.component.ts
│   │   ├── service/
│   │   │   ├── master.service.ts
│   │   ├── model/
│   │   │   ├── class/
│   │   │   │   ├── Employee.ts
│   │   │   ├── interface/
│   │   │   │   ├── master.ts
│   ├── assets/
│   ├── environments/
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── proxy.conf.json
├── package.json
```

## API Endpoints

The application interacts with a backend API hosted at `https://projectapi.gerasim.in/index.html`. Below are the API endpoints used in the application:

- **Get All Departments**: `GET /GetParentDepartment`
- **Get Child Departments by Parent ID**: `GET /GetChildDepartmentByParentId?deptId={deptId}`
- **Create Employee**: `POST /CreateEmployee`
- **Get All Employees**: `GET /GetAllEmployees`
- **Update Employee**: `PUT /UpdateEmployee/{employeeId}`
- **Delete Employee**: `DELETE /DeleteEmployee/{id}`
- **Create Project**: `POST /CreateProject`
- **Update Project**: `PUT /UpdateProject/{projectId}`
- **Get All Projects**: `GET /GetAllProjects`
- **Get Project by ID**: `GET /GetProject/{id}`
- **Get All Project Employees**: `GET /GetAllProjectEmployees`
- **Create Project Employee**: `POST /CreateProjectEmployee`
- **Update Project Employee**: `PUT /UpdateProjectEmployee/{empProjectId}`
- **Get Dashboard Data**: `GET /GetDashboard`

## Running the Project

1. **Install Dependencies**: Run `npm install` to install all required dependencies.
2. **Start the Development Server**: Run `ng serve` to start the development server. The application will be available at `http://localhost:4200`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
