# Employee Management App (Angular v18)

<img width="513" alt="Screenshot 2025-01-12 at 16 24 10" src="https://github.com/user-attachments/assets/8654f8cf-2b7a-44b2-a70c-26c1afa8a884" /> <img width="1196" alt="Screenshot 2025-01-12 at 16 24 49" src="https://github.com/user-attachments/assets/6feaa915-16f5-46c8-b57f-40288202dadf" /> <img width="1208" alt="Screenshot 2025-01-12 at 16 25 32" src="https://github.com/user-attachments/assets/578e95bb-a5c5-4a72-a17b-2a955cc89d49" /> <img width="1212" alt="Screenshot 2025-01-12 at 16 26 12" src="https://github.com/user-attachments/assets/e514b14e-b07f-4a7f-9203-b2850c5e78c0" /> <img width="1216" alt="Screenshot 2025-01-12 at 16 26 27" src="https://github.com/user-attachments/assets/18ea56cb-ccc3-42a1-888d-88490c9feab0" /> <img width="1212" alt="Screenshot 2025-01-12 at 16 26 48" src="https://github.com/user-attachments/assets/3d5402d3-dc6f-47a4-8399-2f732f9e49b7" />

## Project Overview

**Employee Management App** is a modern web application designed to streamline the management of employees and projects within an organization. Built with the latest Angular 18, it provides a clean, responsive UI and robust features for CRUD (Create, Read, Update, Delete) operations. This project is ideal for learning Angular’s new features, as well as for organizations looking for a scalable solution to manage their workforce and projects.

- **Live Demo:** https://employee-management-app-arnob.vercel.app/

- **Backend CORS-Proxy-Server Source Code:** https://github.com/arnobt78/CORS-Proxy-Server-Employee-API

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [How to Run](#how-to-run)
- [Development Instructions](#development-instructions)
- [Project Walkthrough](#project-walkthrough)
- [Keywords](#keywords)
- [Further Help](#further-help)

---

## Features

- **Employee Management:**  
  - Add, view, update, and delete employee records.
- **Project Management:**  
  - Add, view, update, and delete project records.
- **Dashboard:**  
  - Real-time summary of total employees, total projects, and recent activities.
- **Modern Angular 18 Features:**  
  - Standalone components for modularity.
  - DI with the new `inject` function.
- **User-Friendly UI:**  
  - Responsive design with intuitive navigation.
- **Live Demo Access:**  
  - Try the app instantly online.

---

## Technologies Used

- **Frontend:** Angular v18, TypeScript, RxJS, Angular CLI
- **Backend API:** https://projectapi.gerasim.in/index.html (via custom CORS-Proxy)
- **State Management:** Angular services
- **Styling:** CSS (custom)
- **Testing:** Karma, Jasmine (unit & e2e)
- **Deployment:** Vercel

---

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

---

## API Endpoints

All backend requests are routed through a proxy to:  
`https://projectapi.gerasim.in/index.html`

**Endpoints used:**

- `GET /GetParentDepartment` – Fetch all departments
- `GET /GetChildDepartmentByParentId?deptId={deptId}` – Fetch child departments
- `POST /CreateEmployee` – Create new employee
- `GET /GetAllEmployees` – List all employees
- `PUT /UpdateEmployee/{employeeId}` – Update employee
- `DELETE /DeleteEmployee/{id}` – Delete employee
- `POST /CreateProject` – Create new project
- `PUT /UpdateProject/{projectId}` – Update project
- `GET /GetAllProjects` – List all projects
- `GET /GetProject/{id}` – Get project details
- `GET /GetAllProjectEmployees` – List all project-employee assignments
- `POST /CreateProjectEmployee` – Assign employee to project
- `PUT /UpdateProjectEmployee/{empProjectId}` – Update project-employee assignment
- `GET /GetDashboard` – Dashboard summary

---

## How to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/arnobt78/Employee-Management--Angular18.git
   cd Employee-Management--Angular18
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   ng serve
   ```
   Open your browser and visit http://localhost:4200

4. **Build for Production**
   ```bash
   ng build
   ```
   Production-ready code will be generated in the `/dist` folder.

---

## Development Instructions

- **Development Server:**  
  Run `ng serve` to start the dev server. The app auto-reloads when you change source files.

- **Scaffold New Components/Services:**  
  Use Angular CLI:
  ```
  ng generate component component-name
  ng generate service service-name
  ```

- **Running Unit Tests:**  
  ```
  ng test
  ```
  Runs unit tests via https://karma-runner.github.io

- **End-to-End (E2E) Testing:**  
  ```
  ng e2e
  ```
  Runs e2e tests (ensure e2e packages are installed and configured).

---

## Project Walkthrough

1. **Dashboard:**  
   View summary info on employees, projects, and activities.

2. **Manage Employees:**  
   - Add/Edit employee details (name, department, etc.).
   - View all employees in list/table.
   - Delete employees as needed.

3. **Manage Projects:**  
   - Add/Edit projects with relevant info.
   - Assign employees to projects.
   - View all projects and details.

4. **Department Hierarchy:**  
   - Departments and sub-departments are fetched via API.
   - Assign employees to departments.

5. **Modern Angular Practices:**  
   - Uses standalone Angular components for easier maintenance.
   - Leverages Angular 18's new dependency injection syntax (`inject()`).
   - Organized folder structure for scalability.

6. **Screenshots:**  
  
   Look above

---

## Keywords

`Angular18`, `Employee Management`, `Project Management`, `CRUD`, `Dashboard`, `Modern Angular`, `Standalone Components`, `TypeScript`, `API Integration`, `Responsive UI`, `Learning Project`, `Vercel`, `Karma`, `Jasmine`

---

## Further Help

- For Angular CLI guidance, use:
  ```
  ng help
  ```
  or visit [Angular CLI Documentation](https://angular.io/cli)

- For backend proxy code, see:  
  [CORS-Proxy-Server-Employee-API](https://github.com/arnobt78/CORS-Proxy-Server-Employee-API)

---

## Notes

- This project is intended for learning and demonstration. Some functionalities may still be in development.
- If you encounter issues or have suggestions, feel free to open an issue or contribute!
