# Employee Management CRUD App (Angular v18)

<img width="513" alt="Screenshot 2025-01-12 at 16 24 10" src="https://github.com/user-attachments/assets/8654f8cf-2b7a-44b2-a70c-26c1afa8a884" /> <img width="1196" alt="Screenshot 2025-01-12 at 16 24 49" src="https://github.com/user-attachments/assets/6feaa915-16f5-46c8-b57f-40288202dadf" /> <img width="1208" alt="Screenshot 2025-01-12 at 16 25 32" src="https://github.com/user-attachments/assets/578e95bb-a5c5-4a72-a17b-2a955cc89d49" /> <img width="1212" alt="Screenshot 2025-01-12 at 16 26 12" src="https://github.com/user-attachments/assets/e514b14e-b07f-4a7f-9203-b2850c5e78c0" /> <img width="1216" alt="Screenshot 2025-01-12 at 16 26 27" src="https://github.com/user-attachments/assets/18ea56cb-ccc3-42a1-888d-88490c9feab0" /> <img width="1212" alt="Screenshot 2025-01-12 at 16 26 48" src="https://github.com/user-attachments/assets/3d5402d3-dc6f-47a4-8399-2f732f9e49b7" />

---

## Project Summary

**Employee Management App** is a full-featured Angular 18 web application designed for managing employees and projects in an organization. It offers a modern, responsive UI and streamlined CRUD operations for both employees and projects, showcasing the best practices and new features of Angular 18, including standalone components and improved dependency injection.

Whether you're learning Angular, building a scalable business solution, or exploring modern frontend architectures, this project offers a practical, real-world example.

- **Live Demo:** [https://employee-management-app-arnob.vercel.app/](https://employee-management-app-arnob.vercel.app/)
- **Backend (CORS Proxy) Source:** [CORS-Proxy-Server-Employee-API](https://github.com/arnobt78/CORS-Proxy-Server-Employee-API)

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Application Architecture](#application-architecture)
- [API Endpoints](#api-endpoints)
- [How to Run](#how-to-run)
- [Development Instructions](#development-instructions)
- [Project Walkthrough](#project-walkthrough)
- [Keywords](#keywords)
- [Further Help](#further-help)
- [Examples](#examples)
- [Conclusion](#conclusion)

---

## Features

- **Employee Management**
  - Add, view, update, and delete employee records.
- **Project Management**
  - Add, view, update, and delete project records.
- **Dashboard**
  - Real-time summary of total employees, total projects, and recent activities.
- **Modern Angular 18**
  - Standalone components and advanced DI (`inject` function).
- **User-Friendly UI**
  - Responsive layout, intuitive navigation, modern look.
- **Live Demo**
  - Test the app instantly online.

---

## Technologies Used

- **Frontend:** Angular v18, TypeScript, RxJS, Angular CLI, Angular Router, Angular Forms
- **Backend (Example):** [CORS Proxy API](https://github.com/arnobt78/CORS-Proxy-Server-Employee-API)
- **Other:** HTML5, CSS3, RESTful APIs

---

## Project Structure

```
src/
  app/
    app.component.ts         # Root component (standalone)
    app.component.html       # Root template, contains <router-outlet>
    app.config.ts            # Global Angular providers (router, http, etc)
    app.routes.ts            # Application routes
    pages/
      login/                 # Login page/component
      layout/                # Main layout with navigation
      dashboard/             # Dashboard page/component
      employee/              # Employee management page/component
      project/               # Project management page/component
      project-form/          # Form for creating/editing projects
      project-employee/      # Assigning employees to projects
    services/                # (If present) API and state management services
    models/                  # (If present) TypeScript interfaces for data models
  assets/                    # Static assets
  environments/              # Environment variables
  ...
```
> For a complete up-to-date file list, [browse the project on GitHub](https://github.com/arnobt78/Employee-Management--Angular18).

---

## Application Architecture

- **Standalone Components:** Angular 18 supports components that don't require NgModules. Each feature is modular and easy to maintain.
- **Routing:** Defined in `app.routes.ts`. Features lazy loading and nested routes.
- **HTTP Communication:** Uses Angular's HttpClient to interact with a backend REST API (see backend repo).
- **State Management:** Simple RxJS in services (if present).
- **Dependency Injection:** Uses the new `inject` function for cleaner DI.

---

## API Endpoints

> The application is built to interact with a RESTful API (see [backend repo](https://github.com/arnobt78/CORS-Proxy-Server-Employee-API) for more details).

Typical endpoints (examples):

- `GET /api/employees` — Fetch all employees
- `POST /api/employees` — Add new employee
- `PUT /api/employees/:id` — Update employee
- `DELETE /api/employees/:id` — Delete employee

Similar endpoints exist for projects.

> The app uses a CORS Proxy to avoid cross-origin issues during development.

---

## How to Run

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Steps

1. **Clone the repository**
    ```sh
    git clone https://github.com/arnobt78/Employee-Management--Angular18.git
    cd Employee-Management--Angular18
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Run the app locally**
    ```sh
    ng serve
    ```
    Navigate to `http://localhost:4200` in your browser.

4. **Backend API**
    - By default, the app expects an API (see [backend repo](https://github.com/arnobt78/CORS-Proxy-Server-Employee-API)).
    - Make sure the backend is running or update endpoints in the code.

---

## Development Instructions

- **Edit Components:** All feature pages/components are under `src/app/pages/`.
- **Routing:** Modify `app.routes.ts` to add routes.
- **Services:** Use Angular services for API calls and state.
- **Environment:** Edit `environment.ts` for API URLs.
- **Build for Production:**
    ```sh
    ng build --prod
    ```
- **Deploy:** Output will be in `dist/`. Deploy to Vercel, Netlify, or any static host.

---

## Project Walkthrough

### Routing and Layout

- **Login page:** `/login`
- **Main layout:** Uses `LayoutComponent` to provide navigation and a container for feature pages.
- **Dashboard:** Displays summary info (employee/project counts, recent actions).
- **Employees:** Add, edit, delete, and view employees.
- **Projects:** Add, edit, delete, and view projects.
- **Assign Employees:** Link employees to specific projects.

### Example Route Configuration (`src/app/app.routes.ts`)

```typescript
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'new-project/:id', component: ProjectFormComponent },
      { path: 'project-employee', component: ProjectEmployeeComponent },
    ]
  }
];
```

---

## Keywords

Angular 18, Employee Management, Project Management, CRUD, RxJS, Standalone Components, Dependency Injection, REST API, TypeScript, Responsive UI, CORS Proxy, Vercel, Modular Architecture.

---

## Further Help

- [Angular Docs](https://angular.io/docs)
- [Angular CLI Reference](https://angular.io/cli)
- [Employee Management App Backend](https://github.com/arnobt78/CORS-Proxy-Server-Employee-API)

---

## Examples

### Example: Employee Interface

```typescript
export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  projectIds: number[];
}
```

### Example: Fetch Employees in a Service

```typescript
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'https://your-backend-api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
```

### Example: Add Employee Form (Template)

```html
<form (ngSubmit)="addEmployee()">
  <input type="text" [(ngModel)]="employee.name" name="name" required />
  <input type="email" [(ngModel)]="employee.email" name="email" required />
  <button type="submit">Add Employee</button>
</form>
```

---

## Conclusion

This Employee Management App demonstrates a modern, scalable, and modular Angular 18 architecture with real-world CRUD features. Perfect for learning new Angular paradigms, rapid prototyping, or as a foundation for your company’s internal tools.

Feel free to fork, contribute, or raise issues!  
For backend/API implementation, see [CORS-Proxy-Server-Employee-API](https://github.com/arnobt78/CORS-Proxy-Server-Employee-API).

---
